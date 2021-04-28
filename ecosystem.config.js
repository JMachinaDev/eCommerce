module.exports = {
  apps: [
    {
      name: 'aws-jmachina-ecommerce',
      script: 'npx',
      args: 'serve -s build -l 8081 -n',
      interpreter: 'none',
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
}