'use strict'
let req = require("express");
let express = req();
let fs = require('fs')
let schedular = require('./schedular')


var port = process.env.PORT || 6060;
express.listen(port);
console.log("Listening to PORT " + port);


schedular.scheduleTime();
