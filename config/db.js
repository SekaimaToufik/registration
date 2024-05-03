const mongoose = require("mongoose");


const connection = mongoose.createConnection("mongodb://localhost:27017/newTODO").on("open", ()=>{
    console.log("MongoBd connected")
}).on("error" , ()=>{
    console.log("error to connect")
});

module.exports = connection;
