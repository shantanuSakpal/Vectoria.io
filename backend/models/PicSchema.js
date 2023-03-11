const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImageSchema = new Schema({
        id:{
            type: String,
            required: true,
        },
        location:{
            type : String,
            required: true,
        },
        images: {
            type: Array,
            required: true
        },
        likes: {
            type: Number,
        },
        caption:{
            type : String,
        },
        tags:{
            type : Array,
        },
});
module.exports = mongoose.model('images', ImageSchema)