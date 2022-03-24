var express = require('express');
var app = express();

// app.get('/',(req,res) => {
//     res.send("Hello guvi");
// })
// var PORT = app.listen(3001,()=>{
//     console.log("app is running successfully");
// });


var bodyparser =require("body-parser");
var route = express.Route();
var PORT = 3000;

app.post('/', (req,res) => {
    res.send("POST method is used in GUVI");
});

app.listen(PORT,() =>{
    console.log("app is running successfully",PORT);
}
);


