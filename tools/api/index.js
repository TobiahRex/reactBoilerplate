const router = require('express').Router();

router.use('/things', require('./things'));

module.exports = router;
