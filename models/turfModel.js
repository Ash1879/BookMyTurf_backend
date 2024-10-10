const mongoose = require('mongoose');

const turfSchema = new mongoose.Schema(
{
    title: {
        type:String,
        required:true
    },
    discription:{
       type: String,
       required:true,
       
    },
    price:{
        type: Number,
        required:true

    },
    

},
    {timestamps: true}

);

export const Turf = mongoose.model('Turf', turfSchema);