var request = require('request');

request('https://cdn.contentful.com/spaces/aec5y3jb1i9v/entries?access_token=fa037eeb8c7611925bb8ee97baeaafa15bb81694f80e70dc250be2c1d59043f8', function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});