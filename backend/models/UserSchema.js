const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
        id:{
            type : String,
            required: true,
        },
        username:{
            type: String,
            required :true,
        },
        email: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
        },
        location:{
            type : String,
            required : true,
        },
        expyr:{
            type : Number,
            required: true,
        },
        images:{
            type : Array
        },
        tags:{
            type: Array
        },
});
module.exports = mongoose.model('user', UserSchema)