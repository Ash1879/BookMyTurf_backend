const express = require('express')
const router = express.Router()

//get all user
router.get('/', (req, res) => {
    res.send('All user')
  })
//get user by Id
router.get('/:userId', (req, res) => {
    res.send('get user by Id')
  })
//add user
router.post('/', (req, res) => {
    res.send('add new user')
  })
//update user
router.patch('/:userId', (req, res) => {
    res.send('update user')
  })
//delete user
router.delete('/:userId', (req, res) => {
    res.send('delete user')
  })






module.exports = router