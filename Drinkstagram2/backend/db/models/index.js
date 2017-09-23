const User = require('./user')
const Post = require('./post')
const Location = require('./location')
const Comment = require('./comment')

// User.hasMany(Post)
Post.belongsTo(User)


// Location.hasMany(Post)
Post.belongsTo(Location)

Post.hasMany(Comment)
Comment.belongsTo(User)

module.exports = {
    User,
    Post,
    Location,
    Comment
}
