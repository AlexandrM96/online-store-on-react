const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    sale: {
        type: Boolean,
        required: true

    },
    sale_count: {
        type: String,
        required: true
    },
    item: {
        ref: 'items',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('items', itemSchema)