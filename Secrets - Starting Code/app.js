const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const queryDB = require('./models/db');

const app = express();
const port = 8010;
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/register',(req,res)=>{
    res.render('register');
})

app.post('/register',(req,res)=>{
    var email = req.body.username;
    var password = req.body.password;
    var insert = queryDB(email,password).then(status => {
        if (status) {
            console.log('User inserted');
            res.redirect('/');
        } else {
            res.redirect('/register');
        }
    });
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});