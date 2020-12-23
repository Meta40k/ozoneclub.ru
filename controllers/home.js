let app = new (require('express').Router)();
Database = require('arangojs').Database;
const config = require('../config');

// const db = new Database({ url: config.arangoUri });
// db.useDatabase(config.db_name);
// db.useBasicAuth(config.db_user, config.db_password);

app.get('/', (req, res, next) => {
    res.render('index');
});



module.exports = app;