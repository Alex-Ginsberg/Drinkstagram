import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_POSTS = 'GET_POSTS'
const NEW_POST = 'NEW_POST'



/**
 * ACTION CREATORS
 */
export const getPosts = posts => ({type: GET_POSTS, posts})
export const newPost = post => ({type: NEW_POST, post})


/**
 * Thunk Middleware
 */
export const fetchPosts = () =>
dispatch =>
  axios.get('http://172.16.23.37:3000/posts')
    .then(res => res.data)
    .then(posts => {
        dispatch(getPosts(posts))
    })    
    .catch(err => console.log(err))

export const postPost = (content, rating, userId, image) => 
  dispatch =>
    axios.post('http://172.16.23.37:3000/posts', {content, rating, userId, image})
    .then(res => res.data)
    .then(post => {
        dispatch(newPost(post))
    })
    .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_POSTS:
      return action.posts
    case NEW_POST:
      return [...state, action.post]
    default:
      return state
  }
}
