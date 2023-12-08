const express = require('express');
const { insert, checkLogin, checkRegister} = require('../models/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const passport = require('passport');
const LocalStrategy = require('passport-local');

var router = express.Router();

passport.use(new LocalStrategy(function verify(email, password, cb) {
    // jd check loginnya dimasukkan ke passport
    checkLogin(email,password).then(row => {
        if (row) {
            bcrypt.compare(password, row.password, function(err,result) {
                if (result) {
                    console.log("login success")
                    return cb(null,row);
                } else {
                    console.log("login failed")
                    return cb(null, false, { message: 'login failed' });
                }
            });
        }
    });
}));

passport.serializeUser(function(user, cb) {
process.nextTick(function() {
    cb(null, { id: user.id, email: user.email });
});
});

passport.deserializeUser(function(user, cb) {
process.nextTick(function() {
    return cb(null, user);
});
});

router.get('/login',(req,res,next)=>{
    if (!req.user) { return res.render('login'); } else {
        res.redirect('/');
    }
    next();
})

router.post('/login', passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/login'
}));

router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });

router.get('/register',(req,res)=>{
    res.render('register');
})

router.post('/register',(req,res)=>{
    var email = req.body.username;
    var password = req.body.password;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        checkRegister(email).then(statusRegister=>{
            if (statusRegister==0) {
                insert(email,hash).then(status => {
                    if (status) {
                        console.log('User inserted');
                        res.redirect('/');
                    } else {
                        res.redirect('/register');
                    }
                });
            } else {
                console.log("email already registered!")
                res.redirect('/register');
            }
        })
    });

})

module.exports = router;