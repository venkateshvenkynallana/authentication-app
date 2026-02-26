const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        default: ""
    },
    phoneNo: {
        type: String,
        required: true,
        unique: true,
    },
    designation: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const User = mongoose.model("AuthUser", userSchema);

module.exports = User;
