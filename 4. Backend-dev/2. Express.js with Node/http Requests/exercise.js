import express from "express";
const app = express();
const port = 3000;
app.get("/",(req,res)=>{
res.send("This is the homepage");
});
app.get("/about",(req,res)=>{
res.send("This is the about section");
});
app.get("/contact",(req,res)=>{
res.send("This is the contact section");
});

app.listen(port,()=>{
    console.log("Server running on port " + port);
});