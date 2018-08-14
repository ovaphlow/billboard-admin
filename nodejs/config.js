const os = require('os')

const develConfig = {
  app: {
    env: 'development',
    port: 9001
  },
  database: {
    user: 'ovaphlow',
    password: 'ovaph@CDT.1123',
    host: '127.0.0.1',
    name: 'billboard',
    pool: {
      max: os.cpus().length,
      min: 0,
      idle: 30000,
      acquire: 10000
    },
    packsize: 4000,
    logging: true
  }
}

const prodConfig = {
  app: {
    env: 'production',
    port: 9001
  },
  database: {
    user: 'ovaphlow',
    password: '123',
    host: '127.0.0.1',
    database: 'billb',
    pool: {
      max: os.cpus().length,
      min: os.cpus().length,
      idle: 30000,
      acquire: 10000
    },
    packsize: 4000,
    logging: false
  }
}

module.exports = develConfig
