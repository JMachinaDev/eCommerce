<<<<<<< HEAD
#!/bin/bash
cd ~/aws-codedeploy
pm2 delete all
pm2 startOrReload ecosystem.config.js
pm2 save
pm2 startup
=======
#!/bin/bash
cd ~/aws-codedeploy
pm2 delete all
pm2 startOrReload ecosystem.config.js
pm2 save
pm2 startup
>>>>>>> origin/staging
# pm2 startOrReload ecosystem.config.js 