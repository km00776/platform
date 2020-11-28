const express = require("express");
const app = express();
const cors = require("cors");

const platformdb = require('./platformdb.js');

const port = 3001;

app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });

app.get('/', (req, res) => {
    platformdb.getClients().then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error);
    })
});


app.listen(port, () => {
    console.log(`App running on post ${port}`)
});