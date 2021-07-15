const express = require('express');
const app = express();

const path = require('path');
const router = require('./api/router');

app.use('/api', router);

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'server/public/index.html'));
});

module.exports = app;
