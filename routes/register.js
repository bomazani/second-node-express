// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

router.post('/user', (req, res) => {

    res.json({
        confirmation: 'success',
        route: 'register',
        data: body
    })

})

module.exports = router