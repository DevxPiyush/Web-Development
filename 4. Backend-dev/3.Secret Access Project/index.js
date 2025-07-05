import express from "express";
import bodyParser from "body-parser";
import { dirname  } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req,res)=>{
    const pass = req.body["password"];
    if (pass == "nandu") {
        res.sendFile(__dirname + "/public/secret.html")
    }
    else{
        res.send("Access Denied");
        res.sendFile(__dirname + "/public/index.html")
    }
});

app.listen(port, (req,res)=>{
    console.log(`server running at port ${port}`);
});