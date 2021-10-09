const express = require('express');

// Define Express App
const app = express();
const PORT = process.env.PORT || 8080;

var request = require('request');

app.get('/*', function (req, res) {
    var url = 'https://www.sponsorpost.co/host/test/sponsorpost.logo.png';
    console.log('/fileThumbnail going to url', url);
    console.log('referer:', req.headers.referrer || req.headers.referer);
    console.log('req.headers', req.headers);
    request.get(url).pipe(res);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));