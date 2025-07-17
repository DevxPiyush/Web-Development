import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    const today = new Date(); // either live blank aur keep the date yourself as per the need
    const day = today.getDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // console.log("day");
    let type = "weekday"
    let tip = `Hey! it is the ${daysOfWeek[day]}, you gotta work hard`;
    if (day === 0 || day === 6 ) {
        type = "weekend";
        tip = `Hey! it is the ${daysOfWeek[day]}, you gotta enjoy the day`;
    }
    res.render("index.ejs", {
    dayType :type,
    advice : tip,
   });
});

app.listen(port, (req,res)=>{
    console.log(`server running on port ${port}`);
});