const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(process.env.PORT,()=>console.log('server running...')))
    .catch(err => console.log("Error"))
const app = express()

app.use(express.json())

app.get('/workouts', (req,res) => {
    res.json({msg: 'get all workouts'})
})

app.post('/workouts', (req,res) => {
    res.json({msg: 'create a new workout'})
})

app.get('/workouts/:id', (req,res) => {
    res.json({msg: 'get a single workout'})
})

app.delete('/workouts/:id', (req,res) => {
    res.json({msg: 'delete a workout'})
})

app.patch('/workouts/:id', (req,res) => {
    res.json({msg: 'updating a workout'})
})


