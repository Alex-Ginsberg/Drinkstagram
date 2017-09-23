const User = require('./user')
const Post = require('./post')
const Location = require('./location')
const Comment = require('./comment')
var db = require('../db')

const Friends = db.define('friends', {})

// User.hasMany(Post)
Post.belongsTo(User)


// Location.hasMany(Post)
Post.belongsTo(Location)

Post.hasMany(Comment)
Comment.belongsTo(User)

User.belongsToMany(User, { through: Friends, as: 'follower' });

module.exports = {
    User,
    Post,
    Location,
    Comment,
    Friends
}
