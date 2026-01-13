import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        isLoggedIn: Boolean,
        code: Number,

    // more professional approach
      middleName: {
        type : String,  // first we have to write type
        unique: true,
        required: true, // can also give custom message [true,"middle name is required"]
        lowerCase: true
    }
}, {timestamps: true}
)

export const User = mongoose.model("User", userSchema) // exporting mongoose schema , model is a method and take 2 paramerts what model to make and on what basis
// this "User" will be seen as "users" in data base, a mongoose functionality