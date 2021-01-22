const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports = function(req, res, next) {

  // gets the jwt token from the header
    const token = req.header("jwt_token");


    // check if there in token, if so authorisation will be denied
    if (!token) {
        return res.status(403).json({ msg: "authorization denied" });
    }
    
    // verify the token
    try {
        //it is going to give use the user id (user:{id: user.id})
        const verify = jwt.verify(token, process.env.jwtSecret);
    
        req.user = verify.user;

        // continue with the route
        next();
      } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
      }
    };
    
    

