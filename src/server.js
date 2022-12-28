const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

const { url } = require('./config/database.js');

//mongoose.connect(url, {
        useMongoClient: true
//});

//configuracion

app.set('port', process.env.POST || 3000);
console.log('El servidor esta en el Puerto', 3000)
//const __dirname = dirname(fileURLToPath(import.meta.url))
//const views = '/views'
app.set('views', join(__dirname, views))
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(session({
        secret: 'login',
        resave: false,
        saveUninitialized: false
}));