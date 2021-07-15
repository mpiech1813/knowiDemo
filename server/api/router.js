const router = require('express').Router();

const dataRouter = require('./data');
const localDataRouter = require('./localData');

router.use('/data', dataRouter);
router.use('/localData', localDataRouter);

module.exports = router;
