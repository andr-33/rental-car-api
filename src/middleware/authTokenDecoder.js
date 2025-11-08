const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token){
    console.error("A token is required for authentication");
    return res.status(403).send({
        error: {
            message: "A token is required for authentication",
            code: "tokenRequired"
        }
    });
  }
    
  try {
    const decoded = jwt.decode(token);
    req.userId = decoded.sub;

  } catch (err) {
    return res.status(401).send("Invalid Token");
  }

  return next();
};

module.exports = verifyToken;