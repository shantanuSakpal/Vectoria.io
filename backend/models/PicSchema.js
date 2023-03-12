const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImageSchema = new Schema({
        id:{
            type: String,
            required: true,
        },
        email : {
            type : String,
            required : true,
        },
        location:{
            type : String,
            required: true,
        },
        image : { data:Buffer, contentType : String},
        likes: {
            type: Number,
            default : 0,
        },
        caption:{
            type : String,
        },
        tags:{
            type : Array,
        },
        time : {
            type : String
        }
});
module.exports = mongoose.model('images', ImageSchema)