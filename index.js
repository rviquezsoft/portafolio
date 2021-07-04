'use strict'

var express = require('express');
var app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
//const qs = require('qs');
var cors = require('cors');
//const axios = require('axios');
//const { Console } = require('console');
app.use(cors());



app.use(express.static('public'));
app.use(express.static('files'));

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');
});

http.listen(port, () => {
    console.log(`servidor escuchando por puerto ${port}`);
});