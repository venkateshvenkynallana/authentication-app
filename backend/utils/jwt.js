const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    return jwt.sign(
        { 
            id: user._id, 
            email: user.email, 
            fullName: user.fullName
        },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "7d" }
    );
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");
};

module.exports = { generateToken, verifyToken };
