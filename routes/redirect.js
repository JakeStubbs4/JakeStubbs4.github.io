var express = require('express');
var router = express.Router();
require('dotenv').config();

// SPOTIFY API INTERACTION
var spotifyWebAPI = require("spotify-web-api-node");

var redirectUri = `http://${process.env.PROJECT_DOMAIN}/redirect`;

// The API object to interact with the spotify API
var spotifyApi = new spotifyWebAPI({
  clientId : process.env.CLIENT_ID,
  clientSecret : process.env.CLIENT_SECRET,
  redirectUri : redirectUri
});

// Exchange Authorization Code for an Access Token
router.get("/", function (request, response) {
    var authorizationCode = request.query.code;
    
    spotifyApi.authorizationCodeGrant(authorizationCode)
    .then(function(data) {
      console.log(data)
      response.redirect(`/success#access_token=${data.body['access_token']}&refresh_token=${data.body['refresh_token']}`)
    }, function(err) {
      console.log('Something went wrong when retrieving the access token!', err.message);
    });
});


module.exports = router;