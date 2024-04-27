const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
})

const user = new mongoose.model(userData, userSchema)

module.exports = user