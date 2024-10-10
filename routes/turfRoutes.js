const express = require('express')
const router = express.Router()

//get all turf
router.get('/', (req, res) => {
    res.send('All turf')
  })
//get turf by Id
router.get('/:turfId', (req, res) => {
    res.send('get turf by Id')
  })
//add turf
router.post('/', (req, res) => {
    res.send('add new turf')
  })
//update turf
router.patch('/:turfId', (req, res) => {
    res.send('update turf')
  })
//delete turf
router.delete('/:turfId', (req, res) => {
    res.send('delete turf')
  })






module.exports = router