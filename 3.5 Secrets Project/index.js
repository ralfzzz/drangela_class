//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const path = __dirname + "/public/index.html";
const secret = __dirname + "/public/secret.html";
const port = 8003;
var status = false;

function check(req, res, next) {
    if (req.body.password === 'i love you hehe') {
        status = true;
    }
    next();
}

app.use(bodyParser.urlencoded({extended: true}));//add middleware // tambahakn sebelum rotue lainnya; 
app.use(check);
app.listen(port, () => {
    console.log(`server running at ${port}`)
})

app.get('/', (req, res) => { //req dulu baru res
    res.sendFile(path);
});

app.post('/check', (req, res) => { // yang mengarahkan mau get ke mana ya tetep route bukan di middleware
    console.log(req.body.password+' '+req.body.password2);// middleware hanya jadi benar atau salah di sini// fungsi encode/decode
    if (status === true) {
        res.sendFile(secret);
    } else {
        res.redirect('/');
    }
})

// app.post('/check', (req, res) => { // yang mengarahkan mau get ke mana ya tetep route bukan di middleware
//     console.log(req.body.password+' '+req.body.password2);// middleware hanya jadi benar atau salah di sini// fungsi encode/decode
//     if (req.body.password === 'i love you hehe') {
//         res.sendFile(secret);
//     } else {
//         res.redirect('/');
//     }
// })
