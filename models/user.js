var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    

    name: String,
    username: String,
    passsword: String,
    number: Number,
    email: String,
    quiz1: Number,
    quiz2: Number,
    quiz3: Number,
    quiz4: Number,
    quiz5: Number
   
    });

UserSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model("User", UserSchema);