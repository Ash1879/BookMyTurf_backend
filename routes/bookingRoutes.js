const express = require('express')
const { bookingController } = require('../controllers/bookingControllers')
const router = express.Router()

//get all booking
router.get('/', bookingController)
//get booking by Id
router.get('/:bookingId', bookingController)
//add booking
router.post('/', bookingController)
//update booking
router.patch('/:bookingId', bookingController)
//delete booking
router.delete('/:bookingId', bookingController)






module.exports = router