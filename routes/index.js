// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

// POST, GET, PUT, DELETE

router.get('/', (req, res) => {
	res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see.'})
})

router.post('/post', (req, res) => {
	const body = req.body //normally comes from a POST form

	res.json({
		confirmation: 'success',
		data: body
	})
})

// router.get('/query',(req, res)=> {
// 	const name = req.query.name
//	const occupation = req.query.occupation

// 	res.json({
// 		title: title
// 	})
// })


// router.get('/:path',(req, res)=> {
// 	const path = req.params.path

// 	res.json({
// 		data: path
// 	})
// })

// Request Parameters
router.get('/:profile/:username', (req, res, next) => {
	const profile = req.params.profile
	const username = req.params.username

	res.json({
		profile: profile,
		username: username
	})
})

// Request Query Parameters
router.get('/query',(req, res)=> {
	const name = req.query.name
	const job = req.query.job
	const title = req.query.title

	const data = {
		name: name,
		job: job,
		title: title
	}

	res.render('profile', data)

})

module.exports = router
