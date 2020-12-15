const express = require("express");
const app = express();

app.get("/", (req, res) => res.send({message: 'Ola mundo!'}));

module.exports = app
