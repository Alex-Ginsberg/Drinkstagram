var express = require('express');
var router = express.Router();
const {Comment} = require('../db/models')


router.get('/', function(req, res, next) {
  Comment.findAll({
    include: [{all: true}]
  })
    .then(comments => {
      res.json(comments)
    })
    .catch(next)
});

router.get('/:id', (req, res, next) => {
  Comment.findAll({
    where: {
      postId: req.params.id
    },
    include: [{all: true}]
  })
    .then(comments => {
      res.json(comments)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Comment.create({
    content: req.body.content,
    postId: req.body.postId,
    userId: req.body.userId
  })
    .then(comment => {
      Comment.findOne({
        where: {
          id: comment.id
        },
        include: [{all: true}]
      })
      .then(fullComment => res.json(fullComment))
    })
    .catch(next)
})


module.exports = router;
