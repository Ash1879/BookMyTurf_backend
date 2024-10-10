const express = require('express')
const bookingRoutes = require ("./routes/bookingRoutes")
const userRoutes = require ("./routes/userRoutes")
const turfRoutes  = require ('./routes/turfRoutes')
const { connectDB } = require('./config/db')
const app = express()
const port = 3000

connectDB();


app.use ('/booking' ,bookingRoutes)
app.use ('/user', userRoutes)
app.use ('/turf', turfRoutes)





app.listen(port, () => {
  console.log(`backend running successfully ${port}`)
})
