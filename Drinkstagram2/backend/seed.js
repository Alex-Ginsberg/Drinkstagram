const database = require('./db')
const db = require('./db/models')
const User = db.User
const Post = db.Post
const Comment = db.Comment

let data = {
    userData: [
        {username: 'Alex', password: '123', profilePic: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/18622656_10203195702410685_1875683150891651320_n.jpg?oh=ab5a075b947fcf49ab9e4a00a6154f85&oe=5A5688D2'},
        {username: 'Bono', password: '1', profilePic: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzQ5ODgxOV5BMl5BanBnXkFtZTYwNzk3Nzk0._V1_UY317_CR5,0,214,317_AL_.jpg'},
        {username: 'Donald Glover', password: '1', profilePic: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzUxNTU5ODkxNl5BMl5BanBnXkFtZTgwOTIyNjc5MDI@._V1_UX214_CR0,0,214,317_AL_.jpg'},
        {username: 'Rick', password: '1', profilePic: 'http://img.timeinc.net/time/daily/2010/1011/poy_nomination_agassi.jpg'},
    ],

    postData: [
        // {name: 'Martini', image: 'http://del.h-cdn.co/assets/cm/15/10/54f6856c07d4b_-_cuervo_especial_pomegranate_margarita_martini-xl-28464567.jpg', content: 'This drink was fantastic!', rating: 5, userId: 1, locationId: 1},
        // {name: 'Manhattan', image: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/13/0/ED0309H_classic-manhattan-cocktail_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371614573383.jpeg', content: 'This drink was terrible!', rating: 1, userId: 1, locationId: 2},
        // {name: 'Whiskey Sour', image: 'https://cdn.liquor.com/wp-content/uploads/2011/07/05125158/fa-Whiskey-Sour.jpg', content: 'This drink was fantastic!', rating: 4, userId: 2, locationId: 1},
        // {name: 'Mai Tai', image: 'https://www.thecocktailproject.com/sites/default/files/styles/standard-recipe-image-mobile/public/basic-dekuyper-banana-mai-tai.jpg?itok=086wyQcJ', content: 'This drink was fantastic!', rating: 5, userId: 3, locationId: 1},
        // {name: 'Tequilla Sunrise', image: 'https://cdn.liquor.com/wp-content/uploads/2017/03/07152925/tequila-sunrise-720x720-recipe.jpg', content: 'This drink was fantastic!', rating: 3, userId: 3, locationId: 2},
        // {name: 'Rum and Coke', image: 'https://cdn.liquor.com/wp-content/uploads/2015/10/19223251/b-20110420145340.jpg', content: 'This drink was terrible!', rating: 2, userId: 4, locationId: 1},
        // {name: 'Martini', image: 'http://del.h-cdn.co/assets/cm/15/10/54f6856c07d4b_-_cuervo_especial_pomegranate_margarita_martini-xl-28464567.jpg', content: 'This drink was fantastic!', rating: 5, userId: 1, locationId: 1},
        {name: 'Lemon Martinni', image: 'http://d1v471jzilqnl0.cloudfront.net/wp-content/uploads/2011/04/Bar-CoCoon-signature-cocktails003.jpg', content: 'This drink was fantastic!', rating: 5, userId: 1, locationId: 1},
        {name: 'Strawberry Delight', image: 'http://www.miami.com/wp-content/uploads/sites/2/images/La-TacubayaWEB.jpg', content: 'This drink was terrible!', rating: 1, userId: 1, locationId: 2},
        {name: 'Blewberry', image: 'http://ethical-hedonist.com/wp-content/uploads/2013/01/Piccadilly-Line-cocktail-The-Cadogan-1.jpg', content: 'This drink was fantastic!', rating: 4, userId: 2, locationId: 1},
        {name: 'Mojito', image: 'http://chicago.peninsula.com/en/~/media/Images/Chicago/01_Dining-FINAL/Outlet_4_The_Bar/Offers/The-Bar-Cocktail-Selection-2.ashx?mw=342', content: 'This drink was fantastic!', rating: 5, userId: 3, locationId: 1},
        {name: 'Whiskey Mojito', image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/27/a0/52/the-siam.jpg', content: 'This drink was fantastic!', rating: 3, userId: 3, locationId: 2},
        {name: 'Manhattan', image: 'https://media.timeout.com/images/100683391/image.jpg', content: 'This drink was terrible!', rating: 2, userId: 4, locationId: 1},
        {name: 'Rasberry Drank', image: 'http://www.thedeliciouslife.com/wp-content/uploads/2012/08/bar-agricole-fruit-cup-cocktail.jpg', content: 'This drink was fantastic!', rating: 5, userId: 1, locationId: 1},
       
        // {name: 'Martini', image: 'https://tastyphotography.files.wordpress.com/2012/10/img_00121.jpg', content: 'This drink was fantastic!', rating: 5, userId: 1, locationId: 1},
        // {name: 'Manhattan', image: 'https://media-cdn.tripadvisor.com/media/photo-s/06/6b/56/d7/smiths-at-gretna-green.jpg', content: 'This drink was terrible!', rating: 1, userId: 1, locationId: 2},
        // {name: 'Whiskey Sour', image: 'https://i.pinimg.com/originals/b9/c8/74/b9c8747fda1c8aa2997187a021f76dec.jpg', content: 'This drink was fantastic!', rating: 4, userId: 2, locationId: 1},
        // {name: 'Mai Tai', image: 'http://www.vegasnews.com/wp-content/uploads/AirBar-Zombie-Cocktail-570.jpg', content: 'This drink was fantastic!', rating: 5, userId: 3, locationId: 1},
        // {name: 'Tequilla Sunrise', image: 'http://www.antalyainsider.com/wp-content/uploads/2015/04/01.jpg', content: 'This drink was fantastic!', rating: 3, userId: 3, locationId: 2},
        // {name: 'Rum and Coke', image: 'https://i.pinimg.com/736x/6d/5a/68/6d5a681c49f14c59318a07767b1f7113--food-baby-fishbowl.jpg', content: 'This drink was terrible!', rating: 2, userId: 4, locationId: 1},
        // {name: 'Martini', image: 'https://s3.amazonaws.com/ah.cms/images/2a_Bar_el_Coro_Lulo_Martini.jpg', content: 'This drink was fantastic!', rating: 5, userId: 1, locationId: 1},

    ],

    commentData: [
        {content: 'Nice pic!', postId: 1, userId: 1},
        {content: 'That looks amazing!', postId: 1, userId: 2},
        {content: 'I tried it... not impressed', postId: 1, userId: 3},
        {content: 'Def gonna try it next time i go there', postId: 1, userId: 4},
        {content: 'Nice pic!', postId: 2, userId: 1},
        {content: 'That looks amazing!', postId: 2, userId: 2},
        {content: 'I tried it... not impressed', postId: 2, userId: 3},
        {content: 'Def gonna try it next time i go there', postId: 2, userId: 4},
        {content: 'Nice pic!', postId: 3, userId: 1},
        {content: 'That looks amazing!', postId: 3, userId: 2},
        {content: 'I tried it... not impressed', postId: 3, userId: 3},
        {content: 'Def gonna try it next time i go there', postId: 3, userId: 4},
        {content: 'Nice pic!', postId: 4, userId: 1},
        {content: 'That looks amazing!', postId: 4, userId: 2},
        {content: 'Def gonna try it next time i go there', postId: 4, userId: 3},
        {content: 'Nice pic!', postId: 4, userId: 4},
        {content: 'That looks amazing!', postId: 5, userId: 1},
        {content: 'I tried it... not impressed', postId: 5, userId: 2},
        {content: 'Def gonna try it next time i go there', postId: 5, userId: 3},
        {content: 'Nice pic!', postId: 5, userId: 4},
        {content: 'That looks amazing!', postId: 6, userId: 1},
        {content: 'I tried it... not impressed', postId: 6, userId: 2},
        {content: 'Nice pic!', postId: 6, userId: 3},
        {content: 'That looks amazing!', postId: 6, userId: 4},
        {content: 'I tried it... not impressed', postId: 7, userId: 1},
        {content: 'Def gonna try it next time i go there', postId: 7, userId: 2},
        {content: 'Nice pic!', postId: 7, userId: 3},
        {content: 'That looks amazing!', postId: 7, userId: 4},
    ]
}

User.sync({force: true})
    .then(() => Post.sync({force: true}))
    .then(() => Comment.sync({force: true}))
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
    .then(() => {
        return Promise.all(
            data['commentData'].map(comment => {
                return Comment.create(comment)
            })
        )
    })
    .catch((err)=>console.error('Could not seed', err, err.stack))
    .finally(()=>{
        database.close()
        console.log('Connection close')
        return null
    })