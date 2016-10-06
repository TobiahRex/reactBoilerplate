const router = require('express').Router();
const things = require('./things');

router.use('/things', things);

module.exports = router;
