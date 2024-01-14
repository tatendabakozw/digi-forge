import express from 'express'
const router = express.Router()

// create a static site
// post request
// /api/static-site/create
router.post('/create', async (req, res, next) =>{
    try {
        // const {name, file} = req.body

        // const 

        console.log('create a static site')
    } catch (error) {
        next(error)
    }
})