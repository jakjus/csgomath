#!/bin/bash

git pull
pip3 install -r requirements.txt
python3 steam_market_2.py
npm install
gatsby clean
npm run deploy
