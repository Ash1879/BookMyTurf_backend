const express = require('express')
const { userController } = require('../controllers/userControllers')

const router = express.Router()

//get all user
router.get('/', userController)
//get user by Id
router.get('/:userId', userController)
//add user
router.post('/', userController)
//update user
router.patch('/:userId', userController)
//delete user
router.delete('/:userId', userController)






module.exports = router