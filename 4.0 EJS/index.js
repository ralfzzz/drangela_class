import express from "express";

const app = express();
const port = 8003;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const d = new Date("June 24, 2023 01:15:00");
    let day = d.getDay();
    let tes1 = '';
    let tes2 = '';
    if (day==0 || day==6) {
        tes1 = 'weekend';
        tes2 = 'have fun';
    } else {
        tes1 = 'weekday';
        tes2 = 'work hard';
    }
    res.render('index', {
        tes1: tes1,
        tes2: tes2,
    });
   });

app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`);
});