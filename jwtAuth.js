const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require('./platformdb.js');
const jwtGenerator = require('./jwtGenerator');
const authorize = require("./authorize.js");
const validInfo = require("./validInfo");


// login   route;

router.post("/login", validInfo, async (req, res) => {
    try {
        // 1. destrutcure req.body

        const { login, password } = req.body;

        const users = await pool.query("SELECT * FROM users WHERE login = $1", [login])

        if (users.rows.length === 0) {
            return res.status(401).json("Login or Password Invalid");
        }

        // if(validPassowrd)
        // 2. does user exist, if not throw error
        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if (!validPassword) {
            return res.status(401).json("Password or Login Invalid");
        }

        const token = jwtGenerator(user.rows[0].login);

        return res.json({ token });

        // if(validPassowrd)
        // 2. does user exist, if not throw error


    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Server Flopped");
    }
});

router.post("/verify", authorize, (req, res) => {
    try {
        res.json(true)
    }
    catch(error) {
        console.log(error.message)
        res.status(500).send("Server error");

    }
})

module.exports = router;
