const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
{
    name: {
        type:String,
        required:true
    },
    email:{
       type: String,
       required:true,
       unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength:6

    },
    mobile:{
        type:String,
        required:true

    },
    propic:{
        type:String,
        default: "https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
    },

},
    {timestamps: true}

);

export const User = mongoose.model('User', userSchema);