const express = require('express')
const router = express.Router()
const {User} = require('../models')

router.post('/login', (req, res) => {

  // Find username with password and return the user
  //User.findOne({ 
    //where: {
      //username: req.body.username, 
      //password: req.body.password
    //} 
  //}).then(user => {
    //res.send(user.toJSON())
  //})

  const data = {
    username: req.body.username,
    password: req.body.password
  }
  if (data.username === "" || data.password === ""){
    res.json("Username and password required")
  }
  User.findOne({ 
    where: {
      username: data.username, 
      password: data.password
    } 
  }).then(user => {
    if (!user) {
      res.json("Incorrect username or password")
    } else {
      //res.send(user.toJSON())
      res.redirect('/')
    }
  }).catch(err => {
    console.log(err)
    res.status(500).json(err)
  })

})

module.exports = router