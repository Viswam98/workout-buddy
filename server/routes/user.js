const express = require('express')

const router = express.Router()

router.post('/login', (req,res)=>res.status(200).json({msg: 'login'}))

router.post('/signup', (req,res) => res.status(200).json({msg: 'signup'}))

module.exports = router