import express from  'express'

import Batch from '../models/Batch.js'
import Device from '../models/Device.js'

// Access to Express Router.
const router = express.Router()

router.route('/batch').post(async(req, res) => {
    try {
        const batch = await Batch.create(req.body)
        res.status(200).json(batch)
    } catch(error) {
        console.log(error.message)
        res.status(500).json({
            message: error.message
        })
    }
})

router.route('/device').post(async(req, res) => {
    try {
        const device = await Device.create(req.body)
        res.status(200).json(device)
    } catch(error) {
        console.log(error.message)
        res.status(500).json({
            message: error.message
        })
    }
})

export default router
