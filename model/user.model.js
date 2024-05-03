const mongoose = require("mongoose")
const db = require("../config/db")

const {Schema} = mongoose ;
 
const UserSchema = new Schema ({
    email : {
        type : String ,
        lowercase :true , 
        required : true , 
        unique: true
    },
    password : {
        type : String ,
        lowercase :true , 
    }
});

const UserModel = db.model("user",UserSchema);

module.exports = UserModel;