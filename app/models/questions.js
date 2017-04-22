/**
 * Created by GalinaJonat on 20/04/17.
 */
var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    _id: Number,
    question: String,
    answer_city: String,
    answer: String,
    answered: Boolean,
    geojson_coordinates: [Schema.Types.GeometryCollection],
}, {collection: "quiz"});

module.exports = mongoose.model('Question', QuestionSchema);