const express = require('express')
const router = express.Router()
const {User} = require('../models')

router.post('/register', (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password
  }
  if (data.username === "" || data.password === ""){
    res.json("Username and password required")
  } else {
    return User.findOne({ 
      where: {
        username: data.username
      } 
    }).then(user => {
      if (!user) {
        return User.create(req.body)
        .then(user => {
          res.redirect('http://google.com')
        })
        //res.json(user)
      } else {
        res.json("Username taken")
        return console.log("Think of a different username")
      }
    }).catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  }

  /*
  User.findOne({ 
    where: {
      username: data.username
    } 
  }).then(user => {
    if (!user) {
      User.create(req.body)
      res.json(user)
    } else {
      //console.log("Think of a different username")
      res.send('Username taken')
    }
  }).catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
  */

})

module.exports = router
