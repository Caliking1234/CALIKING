const express = require("express");

const app = express();
let port = 80;

app.get("/ki", (req,res)=>{
    res.send("home page");
})

app.get("/library", (req,res)=>{
    res.send("library page");
})

app.get("/activity", (req,res)=>{
    res.send("activity page");
})

app.listen(port, ()=>{
    console.log("app started at port"+port);
})