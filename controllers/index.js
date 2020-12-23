const Logger = require('../logger');
const logger = new Logger();
const path = require('path');

let app = new (require('express').Router)();



//app.use(function (req, res, next) {
    // console.log(req)
//    if (req.method == 'GET' && req.url.endsWith('.jpg')) {

//        res.sendFile(path.resolve('./source/'+req.host + req.url));
   
//    } else {
//        next()
//    }
//})

app.use(require('./home'));


app.use(function (req, res) {
    res.redirect('/');
});

module.exports = app;