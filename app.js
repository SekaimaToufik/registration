const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./rout/user.route")


const app = express()

app.use(bodyParser.json())

app.use('/',UserRoute)

app.use('/creation',UserRoute)

module.exports = app;