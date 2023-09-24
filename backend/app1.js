const express = require("express");
const path = require("path");
const app = express();
require("./src/db/connect");

const port = process.env.PORT || 3000 ;

const static_path = path.join(__dirname, "../public");


app.use(express.static(static_path));

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});
app.get("/register",(req,res)=>{
    res.sendFile(__dirname + "/public/register.html");
});

// app.get("/register",(req,res)=>{
//     res.sendFile(__filename + "/register.html");
// });

app.post("/register",(req, res)=>{
        console.log(req.body.firstName);
        console.log(req.body.lastName);
        console.log(req.body.email);
        console.log(req.body.password);
    
});

app.listen(port, () =>{
    console.log(`Server is running on port no ${port}`);
});