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


app.use("/auth", require("./jwtAuth"));





// with routing we use /client/clients, so if you do / to clients
app.use("/", require("./ClientsPage"));

// app.post("/clients", async(request,response) => {
//     try {
//         const {name, country} = request.body;
//         const newClient = await pool.query(
//             "INSERT INTO clients (name, country) VALUES($1, $2)", 
//             [name, country]
//         );
//         response.json(newClient.rows[0]);
//     }
//     catch(err) {
//         console.error(err.message);
//     }
// });

// // Make a get request (get all the data from the table) when a get request is made on the Clients page
// // the first parameter "/clients" can be called anything, Localhost 5000
// app.get("/clients", async (req, res) => {
//     try {
//         const allClients = await pool.query("SELECT * FROM clients");
//         res.json(allClients.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// });
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname))
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});