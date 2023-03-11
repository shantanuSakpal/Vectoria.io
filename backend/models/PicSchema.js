const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImageSchema = new Schema({
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
            type : Number,
        },
});
module.exports = mongoose.model('images', ImageSchema)