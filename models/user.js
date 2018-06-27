const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')
mongoose.promise = Promise

var userSchema = new Schema({
  email: {
    type: String,
    unique: false,
    required: true
  },
  password: {
    type: String,
    unique: false,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: false
  },
  focuses: {
    type: Array,
    required: false
  },
  isOnline: {
    type: Boolean,
    defaultValue: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Define schema methods
userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('=======NO PASSWORD PROVIDED=======')
    next()
  } else {
    this.password = this.hashPassword(this.password)
    next()
  }
  // this.password = this.hashPassword(this.password)
  // next()
})

const User = mongoose.model("User", userSchema)
module.exports = User