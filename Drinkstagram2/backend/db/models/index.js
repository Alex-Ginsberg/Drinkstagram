const User = require('./user')
const Post = require('./post')
const Location = require('./location')

// User.hasMany(Post)
Post.belongsTo(User)


// Location.hasMany(Post)
Post.belongsTo(Location)

module.exports = {
    User,
    Post,
    Location
}