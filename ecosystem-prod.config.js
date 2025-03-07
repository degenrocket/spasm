module.exports = {
  apps : [{
    name: 'spasm-docs-3002',
    script: 'http-server',
    args: './dist -p 3002',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '256M',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
