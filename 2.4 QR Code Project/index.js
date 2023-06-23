/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import fs from "fs";
import qr from "qr-image";

inquirer.prompt([
    {
      name: 'url',
      message: 'URL to covnert: ',
      type: 'input'
      }])
     .then(function(answer){
    //    console.log(answer.url);
        var qr_png = qr.image(answer, { type: 'png' });
        // qr_png.pipe(require('fs').createWriteStream('i_love_qr.png'));
       fs.writeFile('./URL.txt', answer.url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      })}); 



