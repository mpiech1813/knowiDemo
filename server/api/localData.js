const localDataRouter = require('express').Router();
const User = require('../db/model/users');

localDataRouter.get('/', async (req, res, next) => {
  try {
    const data = await User.findAll();

    res.send(data);
  } catch (error) {
    console.log('error in localDataRouter');
    next(error);
  }
});

module.exports = localDataRouter;
