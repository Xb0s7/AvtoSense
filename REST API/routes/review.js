const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.review.get);

router.post('/', controllers.review.post);


module.exports = router;