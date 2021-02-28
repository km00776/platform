const router = require("express").Router();
const pool = require('./platformdb.js');

router.post("/clients",  async(request,response) => {
    try {
        const {name, country} = request.body;
        const newClient = await pool.query(
            "INSERT INTO clients (name, country) VALUES($1, $2)", 
            [name, country]
        );
        response.json(newClient.rows[0]);
    }
    catch(err) {
        console.error(err.message);
    }
});

// router.get("/clients", async(request, response) => {
//     try {
//         const {name} = req.query;

//         const client = await pool.query(
//             "SELECT * FROM clients WHERE name || ' ' || country ILIKE $1",
//             [`%${name}%`]
//           );

//           res.json(client.rows);

//     }
//     catch(error) {
//         console.error(error.message);
//     }
// });

// Make a get request (get all the data from the table) when a get request is made on the Clients page
// the first parameter "/clients" can be called anything, Localhost 5000
router.get("/clients", async (req, res) => {
    try {
        const allClients = await pool.query("SELECT * FROM clients ORDER BY datecreated");
        res.json(allClients.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;
