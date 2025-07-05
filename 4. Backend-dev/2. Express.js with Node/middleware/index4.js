import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandname = "";

app.use(bodyParser.urlencoded({ extended:true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

function bandnameGenerator(req,res,next){
  console.log(req.body);
  bandname = req.body["street"] + req.body["pet"];
  next();
}
app.use(bandnameGenerator);


app.post("/submit",(req,res)=>{
res.send(`Your Bandname is <h1>${bandname}</h1>`);  	
}); // use backticks always and to use backticks use the key (above tab this one '~')

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
