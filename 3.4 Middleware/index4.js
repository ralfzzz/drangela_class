import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

const app = express();
const port = 8005;
const path = __dirname + "/public/index.html";
var bandName = "";


app.use(bodyParser.urlencoded({extended: true}));//add middleware // tambahakn sebelum rotue lainnya; 

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);// ternyatay untuk memanggil fungsi di express nodejs menggunakan perintah app.use([nama fungsi])
//jd arsiteknya setelah use suatu fungsi maka fungsi akan dijalankan tampa nambah return nilai yang ada di dalam fungsi juda langsung bisa dipanggil di luar fungsi; misalnya di route

app.get("/", (req, res) => {
  res.sendFile(path);
});

app.post("/submit", (req, res) => {
  // console.log(req.body.street);
  res.send(`<h1>Your Band Name: </h1><h2> ${bandName} </h2>`);
  // res.send(`<h2> ${band_name} </h2>`);
  // res.send(`<h2> ${req.body.street} </h2>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
