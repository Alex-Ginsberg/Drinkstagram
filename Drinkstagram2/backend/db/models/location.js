const Sequelize = require('sequelize')
const db = require('../db')

const Location = db.define('location', {
  name: {
      type: Sequelize.STRING,
      allowNull: false,
  },

  rating: {
      type: Sequelize.INTEGER,
      allowNull: false
  }
})

module.exports = Location
