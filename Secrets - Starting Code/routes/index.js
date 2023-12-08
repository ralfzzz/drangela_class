const express = require('express');
var router = express.Router();


router.get('/',(req,res,next)=>{
    if (!req.user) { return res.render('home'); } else {
        res.render('secrets');
    }
    next();
})

module.exports = router;
