const express = require('express')
const router = express.Router()

//get all booking
router.get('/', (req, res) => {
    res.send('All booking')
  })
//get booking by Id
router.get('/:bookingId', (req, res) => {
    res.send('get booking by Id')
  })
//add booking
router.post('/', (req, res) => {
    res.send('add new booking')
  })
//update booking
router.patch('/:bookingId', (req, res) => {
    res.send('update booking')
  })
//delete booking
router.delete('/:bookingId', (req, res) => {
    res.send('delete booking')
  })






module.exports = router