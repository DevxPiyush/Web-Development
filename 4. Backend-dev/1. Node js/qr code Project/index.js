// use inquirer to get user inputs 
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
.prompt([{
        "message":"Type in your URL: ",
        "name":"URL"
    }])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));
    fs.writeFile("URL.txt",url,(err)=>{
        if (err) throw err; 
            console.log("This file has been saved");
    });
})
  .catch((error) => {
    if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in this environment.");
        
    } else {
        console.log("Something went wrong" + Error);
}});
