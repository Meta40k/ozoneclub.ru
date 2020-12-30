let app = new(require('express').Router)();
Database = require('arangojs').Database;
const config = require('../config');
let nodemailer = require('nodemailer')
    // const db = new Database({ url: config.arangoUri });
    // db.useDatabase(config.db_name);
    // db.useBasicAuth(config.db_user, config.db_password);

app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/news', (req, res, next) => {
    res.render('news.html');
});

app.post('/sendMail', (req, res, next) => {
    console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'yandex',
        auth: {
            user: 'zakaz@ozoneclub.ru',
            pass: 'ozoneclub.ru!'
        }
    });

    // var mailOptions = {
    //     from: 'zakaz@ozoneclub.ru',
    //     to: 'dstsarev@mail.ru',
    //     subject: 'Заказ с сайта ozoneclub.ru',
    //     text: ` игра: '${req.body.type}', имя: '${req.body.name}' ,  почта: '${req.body.email}' ,  телефон:  '${req.body.tel}',  коммент:  '${req.body.comment}'`
    // };

    // transporter.sendMail(mailOptions, function(error, info) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // });
    var mailOptions = {
        from: 'zakaz@ozoneclub.ru',
        to: '630127@mail.ru',
        subject: 'Заказ с сайта ozoneclub.ru',
        text: ` игра: '${req.body.type}', имя: '${req.body.name}' ,  почта: '${req.body.email}' ,  телефон:  '${req.body.tel}',  коммент:  '${req.body.comment}'`
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.json({ done: false, error: error })
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ done: true })
        }
    });


})
module.exports = app;