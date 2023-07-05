const mongoose = require(`mongoose`);

const userSchema = new mongoose.Schema({
    login: String,
    password: String,
    tips: [String],
    transactions: [],
})

const model = mongoose.model(`User`, userSchema, `users`)

module.exports = model;