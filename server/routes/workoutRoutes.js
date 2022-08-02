const {
    getWorkouts,
    createWorkouts
} = require('../controllers/workoutController')
const express = require('express')

const router = express.Router();

router.get('/', getWorkouts)

router.post('/', createWorkouts)



module.exports = router