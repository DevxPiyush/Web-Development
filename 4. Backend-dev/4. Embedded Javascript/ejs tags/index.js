import express from "express";
import ejs from "ejs";

const app = express ();
const port = 3000;

app.get("/", (req,res)=>{
    const today = new Date();
    const data = {
        title : "EJS TAG",
        seconds : today.getSeconds(),
        items : ["apple","banana","cherry"],
        htmlcontent : "This is a emphasized line",
    };
    res.render("index.ejs", data);
});


app.listen(port, (req,res)=>{
    console.log(`app running on port ${port}`);
})