const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

const config = require('./config')

const app = express()

app.set('env', config.app.env)

app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use('/', (req, res, next) => {
  console.info(req.method, req.originalUrl)
  next()
})

const review = require('./routes/review')
app.use('/api/review', review)

app.listen(config.app.port, () => {
  console.info(`服务器启动于端口 ${config.app.port}`)
})
