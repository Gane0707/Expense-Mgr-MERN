//server/server.js
var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

//mongoose.connect('mongodb://admin:admin@ds149221.mlab.com:49221/umairdb101');
mongoose.connect('mongodb://admin:admin@ds117148.mlab.com:17148/db100');

app.use('/', router);

module.exports = app;