#!/usr/bin/env python
# coding: utf-8

# In[1]:


import numpy as np
import requests
import json
import time
import math
import pprint
import pickle
import datetime

odds_rarity = {'4b69ff': 0.7992327, '8847ff': 0.1598465, 'd32ce6': 0.0319693, 'eb4b4b': 0.0063939, 'ffd700': 0.0025575}
odds_wear = {'Factory New':0.1471, 'Minimal Wear':0.2468,'Field-Tested':0.4318,'Battle-Scarred':0.0993,'Well-Worn':0.0792}
headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}

# Config
# tax = 0.15
sleeptime = 12


# In[2]:


# HELPER FUNCTIONS

def text_to_price(text):
    return int(text.replace('$','').replace(',','').replace('.',''))

def check(url):
    time.sleep(sleeptime)
    page = requests.get(url, headers=headers)
    while page.status_code != 200:
        print('Error: ', page.status_code,'Retrying...')
        page = requests.get(url, headers=headers)
        time.sleep(sleeptime)
    return page


# In[3]:


def get_csgo_items():
    l = []
    i = 0
    while True:
        url = 'https://steamcommunity.com/market/search/render/?query=&start='+str(i*100)+'&count=100&appid=730&norender=1'
        page = check(url)
        d = page.json()
        l += d['results']
        if i == math.floor(int(d['total_count'])/100):
            break
        i += 1
    return l

items = get_csgo_items()
print(len(items))


# In[10]:


#with open('steam_market_items2pickle', 'wb') as handle:
#    pickle.dump(items, handle, protocol=pickle.HIGHEST_PROTOCOL)


# In[6]:


#pprint.pprint(items[0])
filter_items_end = lambda name: list(filter(
    lambda x: name in x['name'] 
    and x['name'].index(name) == len(x['name']) - len(name), 
    items)
                                )
filter_items = lambda name: list(filter(
    lambda x: name.replace('★ ','') in x['name'], 
    items)
                            )

def extract_case_key_list(cases, case_keys):
    l = []
    for case in cases:
        found = 0
        for key in case_keys:
            if case['name'] in key['name']:
                l.append([case, key])
                found = 1
                break
        if found == 1:
            continue
        for key in case_keys:
            if case['name'].split()[0] in key['name'].split() and case['name'].split()[1] in key['name'].split():
                l.append([case, key])
                found = 1
                break
        if found == 1 or case['name'].startswith('Operation'):
            continue
        for key in case_keys:
            if case['name'].split()[0] in key['name'].split():
                l.append([case, key])
                found = 1
                break
        if found == 1:
            continue
    return l

def add_sale_price(case_key_list):
    upd_ckl = []
    for case_key in case_key_list:
        upd_ck = []
        for el in case_key:
            el['sale_price'] = text_to_price(el['sale_price_text'])
            upd_ck.append(el)
        upd_ckl.append(upd_ck)
    return upd_ckl
    
def add_chest_value(case_key_list):
    upd_ckl = []
    for case_key in case_key_list:
        res = get_estimated_chest_value(case_key[0]['asset_description']['descriptions'])
        new_case = case_key[0]
        new_case['asset_description']['descriptions'] = res['new_desc']
        upd_ck = {'case': new_case, 'key': case_key[1], 'value':get_estimated_chest_value(case_key[0]['asset_description']['descriptions'])['total']}
        upd_ckl.append(upd_ck)
    return upd_ckl

def get_estimated_one_weapon_value(name):
    total = 0
    items = filter_items(name)
    ss = ' '.join(list(map(lambda x: x['name'], items)))
    try:
        if 'StatTrak' in ss:
            found = 0
            for item in items:
                for odd in odds_wear:
                    if odd in item['name'] and 'StatTrak' not in item['name']:
                        found += 0.9*odds_wear[odd]
                        total += 0.9*float(text_to_price(item['sale_price_text']))*odds_wear[odd]
                    elif odd in item['name'] and 'StatTrak' in item['name']:
                        found += 0.1*odds_wear[odd]
                        total += 0.1*float(text_to_price(item['sale_price_text']))*odds_wear[odd]
            if found < 1:
                total /= found
        else:
            found = 0
            for item in items:
                for odd in odds_wear:
                    if odd in item['name']:
                        found += odds_wear[odd]
                        total += float(text_to_price(item['sale_price_text']))*odds_wear[odd]
            if found < 1:
                total /= found
    except Exception as e:
        print('Error:', e, name)
        raise
    return round(total)

def get_estimated_chest_value(desc):
    total_d = {}
    for odd_rarity in odds_rarity.keys():
        total_d[odd_rarity] = {}
        total_d[odd_rarity]['total'] = 0
        total_d[odd_rarity]['occurences'] = 0
    total = 0
    new_desc = []
    for item in desc:
        if 'color' in item.keys():
            if item['color'] in odds_rarity.keys():
                if 'Special Item' in item['value']:
                    if 'Special Item' not in special_item_found:
                        item_value = get_many_weapon_value('Knife |')
                        special_item_found['Special Item'] = item_value
                    else:
                        item_value = special_item_found['Special Item']
                elif 'Rare Gloves' in item['value']:
                    if 'Rare Gloves' not in special_item_found:
                        item_value = get_many_weapon_value('Gloves')
                        special_item_found['Rare Gloves'] = item_value
                    else:
                        item_value = special_item_found['Rare Gloves']
                elif 'Falchion Knife' in item['value']:
                    if 'Falchion Knife' not in special_item_found:
                        item_value = get_many_weapon_value('Falchion Knife')
                        special_item_found['Falchion Knife'] = item_value
                    else:
                        item_value = special_item_found['Falchion Knife']
                elif 'Shadow Daggers' in item['value']:
                    if 'Shadow Daggers' not in special_item_found:
                        item_value = get_many_weapon_value('Shadow Daggers')
                        special_item_found['Shadow Daggers'] = item_value
                    else:
                        item_value = special_item_found['Shadow Daggers']
                elif 'Bowie Knife' in item['value']:
                    if 'Bowie Knife' not in special_item_found:
                        item_value = get_many_weapon_value('Bowie Knife')
                        special_item_found['Bowie Knife'] = item_value
                    else:
                        item_value = special_item_found['Bowie Knife']
                elif 'Butterfly Knife' in item['value']:
                    if 'Butterfly Knife' not in special_item_found:
                        item_value = get_many_weapon_value('Butterfly Knife')
                        special_item_found['Butterfly Knife'] = item_value
                    else:
                        item_value = special_item_found['Butterfly Knife']
                elif 'Classic Knife' in item['value']:
                    if 'Classic Knife' not in special_item_found:
                        item_value = get_many_weapon_value('Classic Knife')
                        special_item_found['Classic Knife'] = item_value
                    else:
                        item_value = special_item_found['Classic Knife']
                elif 'Huntsman Knife' in item['value']:
                    if 'Huntsman Knife' not in special_item_found:
                        item_value = get_many_weapon_value('Huntsman Knife')
                        special_item_found['Huntsman Knife'] = item_value
                    else:
                        item_value = special_item_found['Huntsman Knife']
                else:
                    item_value = get_estimated_one_weapon_value(item['value'])
                item['total'] = item_value
                new_desc.append(item)
                total_d[item['color']]['total'] += item_value*odds_rarity[item['color']]
                total_d[item['color']]['occurences'] += 1
    for el in total_d:
        total += total_d[el]['total']/total_d[el]['occurences']
    
    return {'new_desc': new_desc, 'total': round(total)}

def get_unique_itemname_list(name):
    items = filter_items(name)
    itemname_list = list(map(lambda x: x['name'], items))
    unique_itemname_list = []
    for itemname in itemname_list:
        u = itemname.replace('StatTrak™ ','').replace(' (Factory New)','').replace(' (Minimal Wear)','').replace(' (Field-Tested)','').replace(' (Battle-Scarred)','').replace(' (Well-Worn)','')
        if itemname not in unique_itemname_list:
            unique_itemname_list.append(u)
    return unique_itemname_list

def get_many_weapon_value(name):
    total = 0
    l = get_unique_itemname_list(name)
    for name0 in l:
        w = get_estimated_one_weapon_value(name0)
        total += w
    return round(total/len(l))
        
special_item_found = {}
cases = filter_items_end('Case')
keys = filter_items_end('Case Key')
#print(cases[2])

#print(get_estimated_one_weapon_value('★ Butterfly Knife | Marble Fade'))
#print(list(map(lambda x: x['name'], filter_items('★ Butterfly Knife | Marble Fade'))))
case_key_list = extract_case_key_list(cases, keys)
case_key_list_sale = add_sale_price(case_key_list)
case_key_list_value = add_chest_value(case_key_list_sale)
#pprint.pprint(list(map(lambda x: (x['case']['name'],x['case']['desc'],x['value'],x['case']['sale_price']+x['key']['sale_price']), case_key_list_value)))


# In[8]:



url = 'http://localhost:3000/api/cases'

final_caseobj = {'datetime': datetime.datetime.now().isoformat(), 'case_key_list_value':case_key_list_value}
r = requests.post(url, json=final_caseobj)
print(r)


# In[ ]:



