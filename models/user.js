const mongoose = require('mongoose');
const config = require('../config/database');
const passportLocalMongoose = require('passport-local-mongoose');


// User Schema
const UserSchema = mongoose.Schema({

      firstname:{
        type: String,
        required: false
      },
      lastname:{
        type: String,
        required: false
      },
      email:{
        type: String,
        required: true
      },
      username:{
        type: String,
        required: true
      },
      password:{
        type: String,
        required: true
      },
      phone:{
        type: String,
        required: true
      },
      dateOfbirth:{
        type: Date,
        required: true
      },
      gender:{
       type : String
  }
  
});

const Users = module.exports = mongoose.model('Users', UserSchema);
UserSchema.plugin(passportLocalMongoose);
