const mongoose = require('mongoose')
const {Schema} = mongoose
const passportLocalMongoose = require('passport-local-mongoose')

const User = new Schema({
   username: String,
   password: String,
   sec_question: String,
   sec_answer: String

})

User.plugin(passportLocalMongoose )
module.exports = mongoose.model('user',User)