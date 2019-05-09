const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CluesSchema = new Schema({
    category: {
        type: String
    },
    air_date: {
        type: String
    },
    question: {
        type: String
    },
    value: {
        type: String
    },
    answer: {
        type: String
    },
    round: {
        type: String
    },
    show_number: {
        type: String
    }
},{collection: 'quiz-coach.quiz-coach'});

Clues = mongoose.model('Clues', CluesSchema);

module.exports = Clues;