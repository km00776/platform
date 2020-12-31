const express = require("express");
const app = express();
const cors = require("cors");
const platformdb = require('./platformdb.js');
const PORT = process.env.PORT || 5000;
const path = require("path");
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    
    app.use(express.static(path.join(__dirname, "Client/build")));
  }

console.log(__dirname);
console.log(path.join(__dirname, "Client/build"));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://platform2020.herokuapp.com/');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });

app.get('/t1', (req, res) => {
    platformdb.getClients().then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error);
    })
});

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname))
})

app.listen(PORT, () => {
    console.log(`App running on post ${PORT}`)
});