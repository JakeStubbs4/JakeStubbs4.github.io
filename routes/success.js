var express = require('express');
var router = express.Router();
var request = require('request');
require('dotenv').config();

/* GET successful auth page. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.render('success', { 
    project_domain: process.env.PROJECT_DOMAIN,
    access_token: null
  });
});


module.exports = router;