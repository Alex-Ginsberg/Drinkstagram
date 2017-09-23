import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_USERS = 'GET_USERS'




/**
 * ACTION CREATORS
 */
export const getUsers = users => ({type: GET_USERS, users})



/**
 * Thunk Middleware
 */
export const fetchUsers = () =>
dispatch =>
  axios.get('http://172.16.23.37:3000/users')
    .then(res => res.data)
    .then(users => {
        dispatch(getUsers(users))
    })    
    .catch(err => console.log(err))


/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}
