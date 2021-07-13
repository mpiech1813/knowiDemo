const express = require('express')
const app = express()

const path = require('path')

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname,'..','server/public/index.html'))
})

module.exports = app