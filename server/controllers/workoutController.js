const Workout = require('../models/workoutModel')


const getWorkouts = async(req,res) => {
    const workouts = await Workout.find()
    res.status(200).json(workouts)
}

const createWorkouts = async(req,res) => {
    const {title, reps, load} = req.body
    try{
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch(err) {
        res.status(400).json(err)
    }
}


module.exports = {
    getWorkouts,
    createWorkouts
}