const mongoose = require('mongoose');

let SurveySchema = new mongoose.Schema({
    creator: { type: String, required: true },
    
    question: { type: String, required: true, minlength: 8 },
    
    option1: { type: String, required: true, minlength: 3 },
    option1count: { type: Number, default: 0},
    
    option2: { type: String, required: true, minlength: 3 },
    option2count: { type: Number, default: 0},
    
    option3: { type: String, required: true, minlength: 3 },
    option3count: { type: Number, default: 0},
    
    option4: { type: String, required: true, minlength: 3 },
    option4count: { type: Number, default: 0},

}, { timestamps: true });

mongoose.model('Survey', SurveySchema);