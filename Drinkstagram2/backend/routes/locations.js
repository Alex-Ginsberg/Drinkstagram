var express = require('express');
var router = express.Router();
const {Location, Post} = require('../db/models')


router.post('/', (req, res, next) => {
  const data = req.body.data
  const details = req.body.details
  Location.create({
      description: data.description,
      googleId: data.id,
      name: data.structured_formatting.main_text,
      lat: details.geometry.location.lat,
      long: details.geometry.location.lng  
  })
  .then(location => {
    const currentLocation = location
    Post.create({
      content: req.body.content,
      rating: req.body.rating,
      userId: req.body.userId, 
      image: req.body.image.uri,
      locationId: location.id
    })
    .then(() => res.json(currentLocation))
  })
})

router.get('/', function(req, res, next) {
  Location.findAll({})
    .then(locations => res.json(locations))
    .catch(next)
});




module.exports = router;
