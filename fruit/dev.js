import mongoose from "mongoose";

//CONNECT AND USE/CREATE DB
mongoose.connect('mongodb://0.0.0.0:27017/devDB');
mongoose.connection.on('open', function () {
    console.log('Connected to mongo server.');
});

//CREATE MODEL/COLLECTIONS with data types & validations
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max:10
      },
    review: {
        type: String,
        required: true
      }
});

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    age: {
        type: Number,
        required: true
      },
    favoriteFruit: fruitSchema
});

//DEFINE DATA INSERTED
const Fruit = mongoose.model('fruits', fruitSchema);
const Person = mongoose.model('persons', personSchema);

const fruit = new Fruit({
    name:"Pinapple",
    rating:10,
    review:"nice2"
})

const person = new Person({
    name:"Aziz",
    age:23,
    favoriteFruit:fruit
})

// const banana = new Fruit({
//     name:"banana",
//     rating:1,
//     review:"sehat"
// });
// const kiwi = new Fruit({
//     name:12,
//     rating:1,
//     review:"kiw"
// });

//INSERT DB
await fruit.save();
// await person.save();

// Fruit.insertMany([banana,kiwi]).then(function(){
//     console.log("Data inserted!")
// }).catch(function(error){
//     console.log(error)
// });

//READ DATA
await Fruit.find({}, {name:1,_id:0}).exec().then((res, err) => {
    if (!err) {
        res.forEach(fruitName => {
            console.log(fruitName.name);
        });
    } else {
        console.log(err);
    }
});

//UPDATE DATA
// await Fruit.updateOne({_id:"651d383d5bb2a082c2ac66c3"},{name:"Apple2"}).then((res, err) => {
//     if (!err) {
//         mongoose.connection.close();
//         console.log("Data updated!");
//     } else {
//         console.log(err);
//     }
// });

await Person.updateOne({name:"Aziz"},{favoriteFruit:fruit}).then((res, err) => {
    if (!err) {
        console.log("Data updated!");
    } else {
        console.log(err);
    }
});

// // DELETE DATA
// await Fruit.deleteMany({ _id:{$in : ["651d5aa175aaa1a521aba290","651d383d5bb2a082c2ac66c3"]} }).then((res) => {
//     if (res) {
//         console.log(res);
//     }
// });
mongoose.connection.close();