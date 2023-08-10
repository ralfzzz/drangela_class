import express from "express";
const app = express();
const port = 8001;

app.listen(port, () => {
    console.log(`we're running on ${port}`)
});