const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { 
    type: String,
    required: true 
  },
  // email: {
  //   type: email,
  //   required: true
  // },
  address: { 
    type: String,
    required: true 
  },
  notes: {
    type: String,
    required: false
  },
  focuses: { 
    type: String,
    required: false
  },
  date: { 
    type: Date, 
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
