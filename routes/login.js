var express = require('express');
var router = express.Router();
require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { login_title: 'Spotify Recommendations' , project_domain: process.env.PROJECT_DOMAIN });
});


module.exports = router;