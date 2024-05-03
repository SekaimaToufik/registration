const app = require("./app");
const db = require("./config/db")
const UserModel = require("./model/user.model")
 
app.get("/",(req , res)=>{
 res.send("hi man")
})

app.listen(8080,()=>{
    console.log("server is listening on the port number 8080")
})