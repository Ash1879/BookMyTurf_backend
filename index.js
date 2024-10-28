const express = require('express')
const cors = require('cors')
const bookingRoutes = require ("./routes/bookingRoutes")
const userRoutes = require ("./routes/userRoutes")
const turfRoutes  = require ('./routes/turfRoutes')
const reviewRoutes = require ('./routes/reviewRoutes')
const { connectDB } = require('./config/db')
const app = express()
const port = 3000

connectDB();
app.use (express.json());
app.use(cors());



app.use ('/booking' ,bookingRoutes)
app.use ('/user', userRoutes)
app.use ('/turf', turfRoutes)
app.use('/review' , reviewRoutes)





app.listen(port, () => {
  console.log(`backend running successfully ${port}`)
})
