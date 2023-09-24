var express = require('express');
var navigator = require('navigator');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Send the latitude and longitude to your Node.js server using a POST request.
    fetch('/send-location', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ latitude, longitude }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Location sent to server:', data);
      })
      .catch(error => {
        console.error('Error sending location to server:', error);
      });
  }, function(error) {
    console.error('Error getting location:', error);
  });
} else {
  console.log('Geolocation is not available in this browser.');
}

});

module.exports = router;
