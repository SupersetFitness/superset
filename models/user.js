const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new Schema({
  name: { 
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
  email: {
    type: String,
    required: true
  }, 
  password: {
    // The password cannot be null and be within 6-15 characters in length
    type: String,
    notNull: true
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

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;
