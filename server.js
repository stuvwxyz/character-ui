//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

const url = require('url');
const proxy = require('express-http-proxy');

require('dotenv').config();

// New hostname+path as specified by question:
const apiProxy = proxy('https://ics499-character-api.herokuapp.com', {
    forwardPath: req => url.parse(req.baseUrl).path
});

app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.use('/api/*', apiProxy);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    console.log(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);
