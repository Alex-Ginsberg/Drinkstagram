const database = require('./db')
const db = require('./db/models')
const User = db.User
const Post = db.Post
const Location = db.Location

let data = {
    userData: [
        {username: 'alex', password: '1', profilePic: 'http://www.math.uni-frankfurt.de/~person/_4170854.jpg'},
        {username: 'bob', password: '1', profilePic: 'https://www.thewrap.com/wp-content/uploads/2015/11/Donald-Trump.jpg'},
        {username: 'mike', password: '1', profilePic: 'http://i.telegraph.co.uk/multimedia/archive/03491/Vladimir_Putin_1_3491835k.jpg'},
        {username: 'rick', password: '1', profilePic: 'http://img.timeinc.net/time/daily/2010/1011/poy_nomination_agassi.jpg'},
    ],

    postData: [
        {name: 'Martini', image: 'http://del.h-cdn.co/assets/cm/15/10/54f6856c07d4b_-_cuervo_especial_pomegranate_margarita_martini-xl-28464567.jpg', content: 'This drink was fantastic!', rating: 5, userId: 1, locationId: 1},
        {name: 'Manhattan', image: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/13/0/ED0309H_classic-manhattan-cocktail_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371614573383.jpeg', content: 'This drink was terrible!', rating: 1, userId: 1, locationId: 2},
        {name: 'Whiskey Sour', image: 'https://cdn.liquor.com/wp-content/uploads/2011/07/05125158/fa-Whiskey-Sour.jpg', content: 'This drink was fantastic!', rating: 4, userId: 2, locationId: 1},
        {name: 'Mai Tai', image: 'https://www.thecocktailproject.com/sites/default/files/styles/standard-recipe-image-mobile/public/basic-dekuyper-banana-mai-tai.jpg?itok=086wyQcJ', content: 'This drink was fantastic!', rating: 5, userId: 3, locationId: 1},
        {name: 'Tequilla Sunrise', image: 'https://cdn.liquor.com/wp-content/uploads/2017/03/07152925/tequila-sunrise-720x720-recipe.jpg', content: 'This drink was fantastic!', rating: 3, userId: 3, locationId: 2},
        {name: 'Rum and Coke', image: 'https://cdn.liquor.com/wp-content/uploads/2015/10/19223251/b-20110420145340.jpg', content: 'This drink was terrible!', rating: 2, userId: 4, locationId: 1},
        {name: 'Martini', image: 'http://del.h-cdn.co/assets/cm/15/10/54f6856c07d4b_-_cuervo_especial_pomegranate_margarita_martini-xl-28464567.jpg', content: 'This drink was fantastic!', rating: 5, userId: 1, locationId: 1},

    ]
}

User.sync({force: true})
    .then(() => Post.sync({force: true}))
    .then(() => {
        console.log('Re-seeding the database')
        return Promise.all(
            data['userData'].map((user) => {
                return User.create(user)
            })
        )
    })
    .then(() => {
        return Promise.all(
            data['postData'].map(post => {
                return Post.create(post)
            })
        )
    })
    .catch((err)=>console.error('Could not seed', err, err.stack))
    .finally(()=>{
        database.close()
        console.log('Connection close')
        return null
    })