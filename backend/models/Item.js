const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const ItemSchema = new mongoose.Schema({
    _id: { type: String, default: () => uuidv4() },
    name: { type: String, required: true },
    category: { type: String, required: true },
    image_url: { type: String },
    description: { type: String }
});
module.exports = mongoose.model('Item', ItemSchema);