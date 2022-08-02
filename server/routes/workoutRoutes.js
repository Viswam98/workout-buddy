const {
    getWorkouts,
    createWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const express = require('express')

const router = express.Router();

router.get('/', getWorkouts)

router.post('/', createWorkouts)

router.get('/:id', getWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router