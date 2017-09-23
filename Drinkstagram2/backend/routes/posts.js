var express = require('express');
var router = express.Router();
const {Post} = require('../db/models')
const {User} = require('../db/models')


router.get('/', function(req, res, next) {
  Post.findAll({
    include: [{all: true}]
  })
    .then(posts => {
      res.json(posts)
    })
    .catch(next)
});

router.post('/', (req, res, next) => {
  console.log('INSIDE ROUTE: ', req.body.name)
  Post.create({
    content: req.body.content,
    rating: req.body.rating,
    userId: req.body.userId, 
    image: req.body.image.uri,
    locationId: req.body.locationId,
    name: req.body.name
  })
  .then(post => {
    Post.findOne({
      where: {
        id: post.id
      },
      include: [{all: true}]
    })
    .then(fullPost => res.json(fullPost))
  })
  .catch(next)
})



module.exports = router;
