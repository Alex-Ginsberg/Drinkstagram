var express = require('express');
var router = express.Router();
const User = require('../db/models/user')
const {Friends} = require('../db/models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll({include: [{all: true}]})
  .then(users => res.json(users))
});

router.post('/', (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  User.findOne({
    where: {
      username: username,
      password: password
    }
  })
  .then(user => {
    if (user !== null){
      res.send({success: true, message: user})
    }
    else{
      res.send({success: false})
    }
  })
})

router.post('/signup', (req, res, next) => {
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

router.get('/following/:id', (req, res, next) => {
  Friends.findAll({
    where: {
      userId: req.params.id
    },
    attributes: ['followerId']
  })
  .then(following => res.json(following))
})



module.exports = router;
