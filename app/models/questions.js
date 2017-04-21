/**
 * Created by GalinaJonat on 20/04/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var QuestionSchema = new Schema({
    _id: Number,
    question: String,
    answer_city: String,
    answer: String,
    geojson_coordinates: geojson
});

module.exports = mongoose.model('Question', QuestionSchema);