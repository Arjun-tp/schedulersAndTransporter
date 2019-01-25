'use strict'
let shell = require('shelljs');


function uploadViaTransporter() {
    shell.env["FILE_URI"] = '/home/arjun/Documents/myWork/logcheck/logs/app.log';
    shell.env["ELASTICSEARCH_URI"] = 'http://localhost:9200/logs'
    if (shell.test('-e', '/home/arjun/Documents/myWork/logcheck/logs/app.log')) {
        console.log("FILE IS PRESENT")
        shell.exec('transporter run pipeline.js', function (err, code, data) {
            if (data) {
                shell.rm('-rf', '../logcheck/logs/app.log')
                console.log("Removed!")
            }
        });
    } else {
        console.log("NO FILE")
    }
}




module.exports.uploadViaTransporter = uploadViaTransporter;