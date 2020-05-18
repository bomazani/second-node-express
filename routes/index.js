// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see.'})
})

router.get('/:path',(req, res)=> {
	const path = req.params.path

	res.json({
		data: 'This is a test response.'
	})
})

module.exports = router
