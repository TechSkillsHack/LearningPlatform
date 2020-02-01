var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

var data = {
    "name": "NzakiBlue",
    "isAdmin": true,
    "isAuthenticated": false
}

app.get('/api/user',(req, res) => {
    res.json(data);
});

app.listen(5000, function () {
    console.log('Listening on Port 5000');
});