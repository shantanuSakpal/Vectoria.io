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
            required: true,
        },
        caption:{
            type : String,
            required : true,
        },
        tags:{
            type : Number,
            required : true,
        },
});
module.exports = mongoose.model('images', ImageSchema)