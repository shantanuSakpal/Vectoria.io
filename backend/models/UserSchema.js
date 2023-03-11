const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
        id:{
            type : String,
            required: true,
        },
        rating: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        location:{
            type : String,
            required : true,
        },
        expyr:{
            type : Number,
            required : true,
        },
        images:{
            type : Array,
            required : true,
        },
        tags:{
            type: Array,
            required: true,
        },
});
module.exports = mongoose.model('user', UserSchema)