const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const PlayerSchema = new mongoose.Schema({
    _id: { type: String, default: () => uuidv4() },
    identifier: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Player', PlayerSchema);