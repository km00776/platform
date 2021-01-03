const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./platformdb.js');
const PORT = process.env.PORT || 5000;
const path = require("path");
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {

    app.use(express.static(path.join(__dirname, "Client/build")));
}

console.log(__dirname);
console.log(path.join(__dirname, "Client/build"));

app.post("/clients", async(req,res) => {
    try {
        const {Name, Type, Email, SecondEmail, Address, Country} = req.body
        const newClient = await pool.query(
            "INSERT INTO clients (Name, Type, Email, SecondEmail, Address, Country) VALUES($1, $2, $3, $4, $5, $6) RETURNING *", [Name, Type, Email, SecondEmail, Address, Country]
        );
        res.json(newClient.rows);
    }
    catch(err) {
        console.error(err.message);
    }
})


app.get("/clients", async (req, res) => {
    try {
        const allClients = await pool.query("SELECT * FROM clients");

        res.json(allClients.rows);
    } catch (err) {
        console.error(err.message);
    }
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname))
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});