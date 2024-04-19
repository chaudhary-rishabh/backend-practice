import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {type: String, required: true, trim: true},
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true }
})

const User = mongoose.Model('User', userSchema);

export default User;