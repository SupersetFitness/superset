const express = require('express')
const router = express.Router()
const db = require('../../models')
const passport = require('../../passport')

// this route is just used to get the user basic info
// api/auth/user
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
    console.log("req.user is: true")
		return res.json({ user: req.user })
	} else {
    console.log("req.user is: false")
		return res.json({ user: null })
	}
})

// api/auth/login
router.post('/login',	(req, res, next) => {
		console.log('pre next()')
    next()
    console.log("post next()")
	},
  passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser) {
			console.log(`Deleting ${cleanUser.password}`)
      delete cleanUser.password
      
		}
    res.json({ user: cleanUser })
    
	}
)

// api/auth/logout
router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

// api/auth/singup
router.post('/signup', (req, res) => {
	const { email, password, firstName, lastName, address } = req.body
  // ADD VALIDATION
  console.log(req.body)
  console.log(email, password)
	db.User.findOne({ 'email': email }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the email: ${email}`
			})
    }
    console.log("new user has been created!")
		const newUser = new db.User({
			'email': email,
      'password': password,
      'firstName': firstName,
      'lastName': lastName,
      'address': address,
      'notes': 'Add some extra info to get to know you!',
      'focuses': [],
      'isOnline': true
    })
    
		newUser.save((err, savedUser) => {
      console.log('\n ---------------------------------', err)
      if (err) return res.json(err)
      console.log('\n ---------------------------------' + savedUser);
			return res.json(savedUser)
		})
	})
})
  
module.exports = router