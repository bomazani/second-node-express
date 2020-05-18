// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see.'})
})


module.exports = router
