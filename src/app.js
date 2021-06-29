const express = require("express")
const {urlencoded, json} = require("body-parser");
const morgan = require("morgan");

const app = express();
 
// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }))
 
// parse application/json
app.use(json())

app.use(
    morgan("combined", {
        format: "default",
        skip: req => req.url.includes("healthcheck"), // skip logs for health check endpoint
    })
);

module.exports = app