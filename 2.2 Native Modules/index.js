const fs = require ("fs");

fs.appendFile('tes.txt', "eus nodejs \n", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

fs.readFile('./tes.txt','utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
}); 