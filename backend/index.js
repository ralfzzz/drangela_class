import express from "express";
const app = express();
const port = 8001;

app.listen(port, () => {
    console.log(`we're running on ${port}`)
});

app.get('/', (req, res) => {
    // console.log(req.rawHeaders);
    res.send('<h1>tes tes1</h1>');
});

app.get('/about', (req, res) => {
    // console.log(req.rawHeaders);
    res.send('<h1>RALFZZ</h1>');
});

app.get('/contact', (req, res) => {
    // console.log(req.rawHeaders);
    res.send('<h1>ME</h1>');
});