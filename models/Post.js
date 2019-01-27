const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    author: {
        type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Post = mongoose.model('posts', PostSchema);
