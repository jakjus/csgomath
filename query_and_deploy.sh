#!/bin/bash

exec 3>&1 4>&2
trap 'exec 2>&4 1>&3' 0 1 2 3
exec 1>log.out 2>&1

pip3 install -r requirements.txt
python3 steam_market_2.py
npm install
npm run deploy
