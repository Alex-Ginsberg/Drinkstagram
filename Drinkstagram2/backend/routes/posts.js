var express = require('express');
var router = express.Router();
const {Post} = require('../db/models')
const {User} = require('../db/models')


router.get('/', function(req, res, next) {
  Post.findAll({
    include: [{all: true}]
  })
    .then(posts => {
      console.log(posts)
      res.json(posts)
    })
    .catch(next)
});

router.post('/', (req, res, next) => {
  console.log('INSIDE ROUTE: ', req.body.image, req.body.content, req.body.rating, req.body.userId)
  Post.create({
    content: req.body.content,
    rating: req.body.rating,
    userId: req.body.userId, 
    image: req.body.image.uri,
    locationId: req.body.locationId
  })
  .then(post => res.json(post))
  .catch(next)
})



module.exports = router;
