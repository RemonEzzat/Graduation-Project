const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const config = require('./config/database');
const _ = require('lodash');
var jsdom = require('jsdom');
const { JSDOM } = jsdom;


const { document } = (new JSDOM('')).window;
global.document = document;





mongoose.Promise = global.Promise;

mongoose.connect(config.database);


let db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', function(err){
  console.log(err);
});

// Init App
const app = express();

// Bring in Models

const Places = require('./models/places')
const Clenders = require('./models/clenders')

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session Middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Passport Config
require('./config/passport')(passport);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function(req, res, next){
  res.locals.user = req.user || null;
  next();
});

// Home Route
app.get('/', function(req, res){
  res.render("index");
});

app.get('/auth/facebook', passport.authenticate('facebook', {
  scope: ['email']
}));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/users/login'
  }));

app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

app.get('/auth/google/callback',
passport.authenticate('google', { successRedirect: '/',
                                    failureRedirect: '/users/login' }));


app.get("/place", function(req, res) {
Places.find({}, function(err, places) {
    if(err){
      console.log(err);
  } else {
    res.render("place", {
      places: places
    });
  }
});

});

app.get("/details/:placeId", function(req, res){

  const requestedPlaceId = req.params.placeId;

    Places.findOne({_id: requestedPlaceId}, function(err, place){
      res.render("details", {
        title: place.placeName,
        content: place.placeDetiles
      });
    });
 });

 app.get("/recommended",function(req ,res ){

   Clenders.find({}, function(err, clenders) {
       if(err){
         console.log(err);
     } else {
       res.render("recommended", {
         clenders: clenders
       });
     }
   });

 });
app.get("/map",function(req,res){
  res.render("map")
})
  // Route Files
  let users = require('./routes/users');
  app.use('/users', users);

// Start Server

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
