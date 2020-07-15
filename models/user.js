const mongoose = require('mongoose');
const config = require('../config/database');
// User Schema
const UserSchema = mongoose.Schema({
  local:{
  firstname:{
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  },
  username:{
    type: String
  },
  password:{
    type: String,
    require:true
  },
  phone:{
    type: String
  },
  dateOfbirth:{
    type: Date
  },
  gender:{
    type: String
  }
  },
  facebook: {
		id: String,
		username: String,
		token: String,
		email: String,
		name: String,
		gender:String,
		dateOfbirth:String
	},
	google: {
		id: String,
		username: String,
		token: String,
		email: String,
		name: String,
		gender:String,
		dateOfbirth:String
  }
});


const User = module.exports = mongoose.model('User', UserSchema);
