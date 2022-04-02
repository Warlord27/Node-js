// Synchronous or blocking
//line by line execution

/*Asymchronous or non-blocking
line by line exexution not guaranteed
callback will fire */


const fs = require("fs");
fs.readFile("dele.txt", "utf-8", (err,data)=>{
    console.log(err,data)
});
console.log("This is the message")