import express  from 'express'

// Access to Express Router.
const router = express.Router()

router.route('/').get((req, res) => res.send('Bienvenidos a R2C...'))

export default router