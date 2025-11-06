const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const ScoreSchema = new mongoose.Schema({
    _id: { type: String, default: () => uuidv4() },
    playerIdentifier: { type: String, required: true, index: true },
    points: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Score', ScoreSchema);