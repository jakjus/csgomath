#!/bin/bash

git pull
pip3 install -r requirements.txt
python3 steam_market_2.py
npm run clean
npm install
npm run deploy
