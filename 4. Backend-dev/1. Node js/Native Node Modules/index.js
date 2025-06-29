const fs = require("fs");
fs.writeFile("message.txt","Hello Everyone I am Piyush Agroya, A full stak web developer",(err) =>{
if (err) throw err;
    console.log("The file has  been saved !");
});
