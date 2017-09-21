const User = require('./user')
const Post = require('./post')
const Location = require('./location')

// User.hasMany(Post)
Post.belongsTo(User)


Location.hasMany(Post)

module.exports = {
    User,
    Post,
    Location
}