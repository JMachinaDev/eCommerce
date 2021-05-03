#!/bin/bash
cd ~/aws-codedeploy
sudo /usr/bin/pm2 status
sudo /usr/local/bin/pm2 startOrReload ecosystem.config.js