const Sequelize = require('sequelize')
const db = require('../db')

const Location = db.define('location', {
  name: {
      type: Sequelize.STRING,
  },

  description: {
      type: Sequelize.TEXT,
  },

  googleId: {
      type: Sequelize.TEXT
  },

  name: {
    type: Sequelize.STRING
  },

  lat: {
      type: Sequelize.DOUBLE
  },

  long: {
      type: Sequelize.DOUBLE
  },

  rating: {
      type: Sequelize.INTEGER,
  }
})

module.exports = Location
