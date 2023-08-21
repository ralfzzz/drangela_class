import express from "express";

const app = express();
const port = 3002;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
  app.get('/', (req, res) => {
    res.render('index.ejs');
  });