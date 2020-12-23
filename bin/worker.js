
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const ArangoDBStore = require('../connect-arangodb-session')(session);
const cons = require('consolidate');
const Logger = require('../logger');
const config = require('./../config');
const logger = new Logger();
var favicon = require('serve-favicon');




//process.on('uncaughtException', callback);
//process.setMaxListeners(0);

let app = module.exports.app = express();



app.use(require('./rt'));

app.use('/public', express.static(path.join(__dirname, '../public')));

//app.use(favicon(__dirname + '../../public/images/favicon.png'));

app.use(require('cookie-parser')());

const server = app.listen(config.port, function (err) {
    if (err) throw err;
    logger.log(`Running server at port ${config.port}!`);
});
const io = require('socket.io')(server);
//io.set("transport", ["xhr-polling", "websocket", "polling", "htmlfile"]);



app.use(bodyParser.json({
    limit: "100kb"
}));
app.use(bodyParser.urlencoded({
    extended: true
}));

var ioid = [];
var ses;

app.engine('html', cons.mustache);
app.set('view engine', 'html');
app.set('views', __dirname + '/../public');



app.use(require('./../controllers'));
app.use(require('./errorHandler'));