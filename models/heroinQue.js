var mongoose = require("mongoose");

    var he_quizSchema = new mongoose.Schema({
        question: String,
        opt1: String,
        opt2: String,
        opt3: String,
        opt4: String,
        opt5: String
    });
    
module.exports = mongoose.model("he_quiz",he_quizSchema); // creating a model to access various mongoos methods