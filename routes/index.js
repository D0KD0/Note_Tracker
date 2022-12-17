const express = require("express");

const get = require('./get');
const save = require('./save');
const del = require('./delete');

const app = express();

app.use('/notes', get);
app.use('/notes', save);
app.use('/notes', del);

module.exports = app;