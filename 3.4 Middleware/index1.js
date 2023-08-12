import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

const app = express();
const port = 8001;
const path = __dirname + "/public/index.html";
app.use(bodyParser.urlencoded({extended: true}));//add middleware // tambahakn sebelum rotue lainnya; 
// app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  if (req.body) {
    // res.redirect(200, "/");
    res.sendStatus(200);
    // return res.redirect("/");

  }else{
    res.sendStatus(404);
    }
  // return res.redirect("/");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
