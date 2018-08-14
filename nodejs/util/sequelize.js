const Sequelize = require('sequelize')

const config = require('../config')

module.exports = new Sequelize(config.database.name, config.database.user, config.database.password, {
  dialect: 'mysql',
  host: config.database.host,
  port: 3306,
  pool: {
    max: config.database.pool.max,
    min: config.database.pool.min,
    idle: config.database.pool.idle,
    acquire: config.database.pool.acquire
  },
  logging: config.database.logging,
})
