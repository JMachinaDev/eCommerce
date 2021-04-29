#!/bin/bash
cd ~/aws-codedeploy
pm2 delete all
pm2 startOrReload ecosystem.config.js
pm2 save
pm2 startup
# pm2 startOrReload ecosystem.config.js 