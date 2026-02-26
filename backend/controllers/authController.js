const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwt.js");
const User = require("../models/User.js");


// Sign up form
const signUp = async (req, res) => {
    const { fullName, email, password, bio, phoneNo, designation } = req.body;

    try {
        if (!fullName || !email || !password || !phoneNo || !designation) {
            return res.status(400).json({ message: "Required fields are missing." });
        }

        // Password hashing
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword,
            bio: bio || "",
            phoneNo,
            designation,

        });

        const token = generateToken(newUser);

        res.status(201).json({ 
            success: true, 
            userData: {
                id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                phoneNo: newUser.phoneNo,
                designation: newUser.designation,
                bio: newUser.bio
            }, 
            token, 
            message: "Account created successfully." 
        });

    } catch (error) {
        console.log("Error in signUp:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ message: "Please enter all credentials" });
        }

        const userData = await User.findOne({ email });
    
        if (!userData) {
            return res.status(400).json({ message: "User not found" });
        }

        const isPassword = await bcrypt.compare(password, userData.password);

        if (!isPassword) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        const token = generateToken(userData);

   
        return res.status(200).json({ 
            success: true, 
            userData: {
                id: userData._id,
                fullName: userData.fullName,
                email: userData.email,
                phoneNo: userData.phoneNo,
                designation: userData.designation,
                bio: userData.bio
            }, 
            token, 
            message: "Login successful." 
        });

    } catch (error) {
        console.error("Login error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const logout = async (req, res) => {
    try {
        // Clear the HTTP-only cookie
        res.cookie("authToken", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            expires: new Date(0), // Set to past date to expire immediately
            path: "/"
        });

        res.status(200).json({ 
            success: true, 
            message: "Logout successful." 
        });
    } catch (error) {
        console.error("Logout error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { signUp, login, logout };
