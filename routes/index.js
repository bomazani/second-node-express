// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

const profiles = {

	bhunt: {
		name: 'Bob Hunt',
		company: 'self',
		languages: ['javascript', 'python', 'java']
	},
	bgates: {
		name: 'Bill Gates',
		company: 'microsoft',
		languages: ['c', 'c#', 'java']
	},
	sjobs: {
		name: 'Steve Jobs',
		company: 'apple',
		languages: ['c++', 'swift', 'objective-c']
	}

}

// POST, GET, PUT, DELETE
router.get('/', (req, res) => {
	res.render('index', {text: 'This is the dynamic data. Open index.js from the router'})
})

router.post('/addprofile', (req, res) => {
	const body = req.body
	body['languages'] = req.body.languages.split(", ")

	profiles[body.username] = body
	res.redirect('/profiles/' + body.username)
})

router.get('/', (req, res) => {
	res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see.'})
})

router.get('/:path', (req, res) => {
	const path = req.params.path

	res.json({
		data: path
	})
})

// Request Parameters
router.get('/:profile/:username', (req, res, next) => {
	const profile = req.params.profile
	const username = req.params.username
	const currentProfile = profiles[username]

	if (currentProfile == null) {
		res.json({
			confirmation: 'fail',
			message: 'Profile ' + username + ' not found'
		})

		return
	}

	// res.json({
	// 	confirmation: 'success',
	// 	profile: currentProfile

	res.render('profile', currentProfile)
	
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
