var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
	const username = req.user?.username ?? 0;
	res.render('index', { title: 'Hotel Booking',username });
});

module.exports = router;
