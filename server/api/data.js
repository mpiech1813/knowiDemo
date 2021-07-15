const axios = require('axios');
const dataRouter = require('express').Router();

dataRouter.get('/', async (req, res, next) => {
  try {
    const data = (await axios.get('http://catalog.data.gov/api/3/')).data;

    res.send(data);
  } catch (error) {
    console.log('error occurred in data router');
    next(error);
  }
});

module.exports = data;
