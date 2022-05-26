var express = require('express');
var router = express.Router();
const { postTrade } = require('./trades');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.send('<p>HTML Data</p>');
});

module.exports = router;
