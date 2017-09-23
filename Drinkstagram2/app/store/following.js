import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_FOLLOWING = 'GET_FOLLOWING'
const NEW_FOLLOWING = 'NEW_FOLLOWING'




/**
 * ACTION CREATORS
 */
export const getFollowing = following => ({type: GET_FOLLOWING, following})
export const newFollowing = following => ({typ: NEW_FOLLOWING, following})



/**
 * Thunk Middleware
 */
export const fetchFollowing = (id) =>
dispatch =>
  axios.get(`http://172.16.23.37:3000/users/following/${id}`)
    .then(res => res.data)
    .then(following => {

        dispatch(getFollowing(following))
    })    
    .catch(err => console.log(err))

export const postFollow = (userId, followerId) => 
dispatch => 
    axios.post('http://172.16.23.37:3000/users/following/', {userId, followerId})
        .then(res => res.data)
        .then(following => {
            dispatch(newFollowing(following))
        })
        .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_FOLLOWING:
      return action.following
    case NEW_FOLLOWING:
        return [...state, action.following]
    default:
      return state
  }
}
