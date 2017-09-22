const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  name: {
    type: Sequelize.STRING
  },
  image: {
      type: Sequelize.TEXT,
    //   allowNull: false,
  },

  content: {
      type: Sequelize.TEXT,
    //   allowNull: false
  },

  rating: {
      type: Sequelize.INTEGER,
    //   allowNull: false
  }
})

module.exports = Post
