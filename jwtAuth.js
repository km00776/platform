const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require('./platformdb.js');
const jwtGenerator = require('./jwtGenerator');
const authorize = require("./authorize.js");
const validInfo = require("./validInfo");


// login   route;
// from the next() in authorise, we
router.post("/login", validInfo, async (req, res) => {

    const { login, password } = req.body;
    try {
        // 1. destrutcure req.body

      
        

        const user = await pool.query("SELECT * FROM users WHERE login = $1", [login])

        if (user.rows.length === 0) {
            return res.status(401).json("Login or Password Invalid");
        }

        // if(validPassowrd)
        // 2. does user exist, if not throw error

        // Why are we comparing user.rows[0].password and not any other rows? 
        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if (!validPassword) {
            return res.status(401).json("Password or Login Invalid");
        }

        const jwtToken = jwtGenerator(user.rows[0].user_id);
        


        // need to watch a video on this again 
        return res.json({ jwtToken });

        // if(validPassowrd)
        // 2. does user exist, if not throw error


    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Server Flopped");
    }
});

router.post("/verify", authorize, (req, res) => {
    try {
        res.json(true);
    }
    catch(error) {
        console.error(error.message);
        res.status(500).send("Server error");

    }
});

module.exports = router;
