const mongoose = require('mongoose');
const config = require('../config/database');
const passportLocalMongoose = require('passport-local-mongoose');

const UserGoogleFacebookSchema = mongoose.Schema({
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
const UsersGF = module.exports = mongoose.model('UsersGF', UserGoogleFacebookSchema);
UserGoogleFacebookSchema.plugin(passportLocalMongoose);
