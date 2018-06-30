const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../models')

passport.serializeUser((user, done) => {
	console.log('=== serialize ... called ===')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, { email: user.email })
})

passport.deserializeUser((email, done) => {
	console.log('DEserialize ... called')
	User.findOne(
		{ email: email },
		'firstName lastName email',
		(err, user) => {
			console.log('======= DESERILAIZE USER CALLED ======')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	)
})

// ==== Register Strategies ====
passport.use(LocalStrategy)

module.exports = passport