const {
    getWorkouts,
    createWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')

const express = require('express')

const router = express.Router();

router.use(requireAuth)

router.get('/', getWorkouts)

router.post('/', createWorkouts)

router.get('/:id', getWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router