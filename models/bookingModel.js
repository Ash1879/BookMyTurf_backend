const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
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
    mobile:{
        type:String,
        required:true

    },
    date: Date,
    time: time,

},
    {timestamps: true}

);

export const Booking = mongoose.model('Booking', bookingSchema);