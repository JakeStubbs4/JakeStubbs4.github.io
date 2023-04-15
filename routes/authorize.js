var express = require('express');
var router = express.Router();
require('dotenv').config();

// SPOTIFY API INTERACTION
var spotifyWebAPI = require("spotify-web-api-node");

var redirectUri = `http://${process.env.PROJECT_DOMAIN}/redirect`;
var scopes = ['user-top-read'];
var showDialog = true;

// The API object to interact with the spotify API
var spotifyApi = new spotifyWebAPI({
  clientId : process.env.CLIENT_ID,
  clientSecret : process.env.CLIENT_SECRET,
  redirectUri : redirectUri
});

router.get("/", function (request, response) {
  var authorizeURL = spotifyApi.createAuthorizeURL(scopes, null, showDialog);
  response.redirect(authorizeURL);
});


module.exports = router;
