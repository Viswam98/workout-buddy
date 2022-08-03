const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const workoutRoutes = require('./routes/workoutRoutes')

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(process.env.PORT,()=>console.log('server running...')))
    .catch(err => console.log("Error"))
const app = express()

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})
app.use(express.json())

app.use('/api/workouts', workoutRoutes)



