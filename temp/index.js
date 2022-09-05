const express = require("express");
const app = express();
const fs = require("fs");

const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

