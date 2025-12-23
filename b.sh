#!/bin/bash

# メインループ
while true; do
  node ./checks/index.js
  sleep 1
done
