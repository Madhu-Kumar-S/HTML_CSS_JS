//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){

    var today  = new Date();
    var options = { weekday: 'long', day: 'numeric', month: 'long' };
    // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    // console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016

    var day = today.toLocaleDateString("en-US",options);
    res.render("list", {thisday:day});


    // var currentDay = today.getDay();
    // var day = "";
    // if(currentDay===6 || currentDay===0){
    //     day = "Weekend";    
    // }
    // else{
    //     day = "Weekday";
    // }
    // res.render("list", {thisday:day});


    // if(today.getDate === 6 || today.getDate === 0) {
    //     res.send("Yeh! its weekend."); // to send single message
    // }
    // else {
    //     // send multiple msgs
    //     res.write("This is not weekend");
    //     res.write("Oh! I have to work.");
    //     res.send();
    // }
    // // send entire html file
    // res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
