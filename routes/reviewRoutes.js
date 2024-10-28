const express = require('express')
const router = express.Router()

//get all reviews
router.get('/', (req, res) => {
    res.send('All review')
  })
//get review by Id
router.get('/:reviewId', (req, res) => {
    res.send('get review by Id')
  })
//add review
router.post('/', (req, res) => {
    res.send('add new review')
  })
//update review
router.patch('/:reviewId', (req, res) => {
    res.send('update review')
  })
//delete review
router.delete('/:reviewId', (req, res) => {
    res.send('delete review')
  })






module.exports = router