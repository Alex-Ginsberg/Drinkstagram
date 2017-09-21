var express = require('express');
var router = express.Router();
const User = require('../db/models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll({include: [{all: true}]})
  .then(users => res.json(users))
});

router.post('/', (req, res, next) => {
  console.log('INSIDE THE POST')
  const username = req.body.username
  const password = req.body.password
  User.findOne({
    where: {
      username: username,
      password: password
    }
  })
  .then(user => {
    console.log(user)
    res.send({success: true, message: user})
  })
})

router.post('/signup', (req, res, next) => {
  console.log('IMAGE', req.body.profilePic)
  const username = req.body.username
  const password = req.body.password
  const profilePic = req.body.profilePic.uri

  User.create({
    username,
    password,
    profilePic
  })
  .then(user => res.send({success: true, message: user}))
})



module.exports = router;
