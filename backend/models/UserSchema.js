const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
        id:{
            type : String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
        },
        location:{
            type : String
        },
        expyr:{
            type : Number
        },
        images:{
            type : Array
        },
        tags:{
            type: Array
        },
});
module.exports = mongoose.model('user', UserSchema)