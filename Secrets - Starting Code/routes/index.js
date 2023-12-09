const express = require('express');
var router = express.Router();


router.get('/',(req,res,next)=>{
    // console.log(req.user);
    if (!req.user) { return res.render('home'); } else {
        return res.render('secrets', {user: req.user});
    }
    next();
})

module.exports = router;
