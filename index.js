const express = require('express');

// Define Express App
const app = express();
const PORT = process.env.PORT || 8080;

var request = require('request');

app.get('/*', function (req, res) {
    var url = 'https://www.sponsorpost.co/host/test/sponsorpost.logo.png';
    logger.info('/fileThumbnail going to url', url);
    request.get(url).pipe(res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));