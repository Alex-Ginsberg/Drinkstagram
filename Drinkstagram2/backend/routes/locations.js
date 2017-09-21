var express = require('express');
var router = express.Router();
const {Location} = require('../db/models')

router.post('/', (req, res, next) => {
  console.log('DATA: ', req.body.data)
  console.log('details: ', req.body.details)
  res.json('done')
})

router.get('/', function(req, res, next) {
  Location.findAll({})
    .then(locations => res.json(locations))
    .catch(next)
});




module.exports = router;
