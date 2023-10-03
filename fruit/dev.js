import mongoose from "mongoose";

mongoose.connect('mongodb://0.0.0.0:27017/devDB');
// mongoose.connection.on('open', function () {
//     console.log('Connected to mongo server.');
// });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model('fruits', fruitSchema);

const fruit = new Fruit({
    name:"banana",
    rating:1,
    review:"sehat"
});

await fruit.save();