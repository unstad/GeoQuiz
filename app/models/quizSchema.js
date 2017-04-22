var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema
var QuizSchema = new Schema({
    _id: Number,
    question: String,
    answer_city: String,
    answer: String,
    geojson_coordinates: {
        type: String,
        geometries: {
            type: String,
            coordinates: Array
        }
    }

    // geojson_coordinates: {'type': {
    //     type: String,
    //     required: true,
    // },
    //     coordinates: [
    //         [
    //             {type: [Number]}
    //         ]
    //     ]
    // }
}, {collection: 'Quiz'});

QuizSchema.methods.getQuestion = function () {
    return this.question;
}
QuizSchema.methods.getAnswerCity = function () {
    return this.answer_city;
}
QuizSchema.methods.getAnswer = function () {
    return this.answer;
}
QuizSchema.methods.getPolygon = function () {
    return this.geojson_coordinates;
}

var QuizModel = mongoose.model('Quiz', QuizSchema);

module.exports = QuizModel;
