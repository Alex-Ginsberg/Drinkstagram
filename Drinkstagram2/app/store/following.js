import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_FOLLOWING = 'GET_FOLLOWING'




/**
 * ACTION CREATORS
 */
export const getFollowing = following => ({type: GET_FOLLOWING, following})



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


/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_FOLLOWING:
      return action.following
    default:
      return state
  }
}
