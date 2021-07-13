const router = require('express').Router();

const dataRouter = require('./data');

router.use('/data', dataRouter);

module.exports = router;
