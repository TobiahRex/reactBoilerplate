import express from 'express';

const router = new express.Router();

router.use('/things', require('./things'));

export default router;
