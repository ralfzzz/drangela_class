const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const authRouter = require('./routes/auth');
const indexRouter = require('./routes/index');
const passport = require('passport');
const session = require('express-session');

const app = express();
const port = 8010;
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    secret: 'testingtresting',
    resave: false,
    saveUninitialized: false,
    // store: "to save session into db"
  }));
app.use(passport.authenticate('session'));

app.use(authRouter);
app.use(indexRouter);

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});