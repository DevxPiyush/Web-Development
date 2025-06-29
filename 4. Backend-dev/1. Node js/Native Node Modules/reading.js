const fs = require("fs");
fs.readFile("message.txt","utf-8",(err,data)=>
{
    if (err) {
        console.log("error reading file" + err);
        return err;
    }
    console.log("File Content is: ",data);
});