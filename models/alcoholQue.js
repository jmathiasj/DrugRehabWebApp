var mongoose = require("mongoose");

    var al_quizSchema = new mongoose.Schema({
        question: String,
        opt1: String,
        opt2: String,
        opt3: String,
        opt4: String,
        opt5: String
    });
    
module.exports = mongoose.model("al_quiz",al_quizSchema); // creating a model to access various mongoos methods