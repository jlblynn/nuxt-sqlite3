const express = require('express')
const router = express.Router()
const {User} = require('../models')

// Home route finds all users
router.get('/', function(req, res) {
  User.findAll().then(function(users) {
    res.send({
      users: users
    })
  });
});

// About route
//router.get('/about', function(req, res) {
  //res.send('Learn about us')
//})

// Register route
router.use(require('./register'))

// Login route
router.use(require('./login'))

module.exports = router