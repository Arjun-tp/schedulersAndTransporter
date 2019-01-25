'use strict'
let schedule = require('node-schedule');
let transporterCall = require('./transporterCall')

function scheduleTime() {
    try {
        let j = schedule.scheduleJob('* * * * *', function (data) {
            transporterCall.uploadViaTransporter();
        })
    } catch (e) {
        console.log("err", err)
    }

}








module.exports.scheduleTime = scheduleTime;