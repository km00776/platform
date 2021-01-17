module.exports = function(req, res, next) {
    const {login, password} = req.body;


    if(req.path === "/login") {
        if(![login, password].every(Boolean))  {
            return res.json("Missing Credentials");
        }
    }
    next();
};