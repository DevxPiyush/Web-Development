import express from "express";

const app = express();
const port = 3000;

function logger(req,res,next) {
  console.log("Request Recieved", req.method);
  console.log("Request url: ", req.url);
  next();
}
app.use(logger); //  made custom middleware

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/submit", (req,res)=>{
  console.log("Form submitted successfully");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
