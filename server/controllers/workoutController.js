const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

const getWorkouts = async(req,res) => {
    const workouts = await Workout.find().sort({createdAt: -1})
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

const getWorkout = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Workout does not exist'})
    }
    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error: 'Workout does not exist'})
    }
    res.status(200).json(workout)
}

const deleteWorkout = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Workout does not exist'})
    }
    const workout = await Workout.findOneAndDelete({_id:id})
    if(!workout){
        return res.status(404).json({error: 'Workout does not exist'})
    }
    res.status(200).json(workout)
}

const updateWorkout = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Workout does not exist'})
    }
    const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error: 'Workout does not exist'})
    }
    res.status(200).json(workout)
}


module.exports = {
    getWorkouts,
    createWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}