/**
 * Created by GalinaJonat on 20/04/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuizSchema = new Schema({
    _id: Number,
    question: String,
    answer_city: String,
    answer: String,
    geojson_coordinates: {'type': {
        type: String,
        required: true,
    },
        coordinates: [
            [
                {type: [Number]}
            ]
        ]
    }
});

QuizSchema.methods.getQuestion = function(){
    return this.question;
};

QuizSchema.methods.getAnswerCity = function(){
    return this.answer_city;
};

QuizSchema.methods.getAnswer = function(){
    return this.answer;
}


QuizSchema.methods.getPolygon = function(){
    return this.geojson_coordinates;
};

// compile schema into a model
var Question = mongoose.model('Question', QuizSchema);


// export model
module.exports = Question;