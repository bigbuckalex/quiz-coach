const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatsSchema = new Schema({
    category: {
        type: String
    },
    numCorrect: {
        type: Number
    },
    numIncorrect: {
        type: Number
    }
});

Stats = mongoose.model('Stats', StatsSchema);

module.exports = Stats;