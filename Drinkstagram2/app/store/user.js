import axios from 'axios'

/**
 * ACTION TYPES
 */
const LOGIN = 'LOGIN'
const SIGNUP = 'SIGNUP'


/**
 * ACTION CREATORS
 */
export const login = user => ({type: LOGIN, user})
export const signup = user => ({type: SIGNUP, user})

/**
 * Thunk Middleware
 */
export const postUser = (username, password) =>
dispatch =>
  axios.post('http://172.16.23.37:3000/users', {username: username, password: password})
    .then(res => res.data)
    .then(payload => {
        if (payload.success === true) {
            console.log('HHHEEEERRREEE')
            dispatch(login(payload.message))
        }
    })    
    .catch(err => console.log(err))

export const makeUser = (username, password, profilePic) => 
dispatch =>
    axios.post('http://172.16.23.37:3000/users/signup', {username: username, password: password, profilePic: profilePic})
      .then(res => res.data)
      .then(payload => {
        if (payload.success === true) {
          dispatch(signup(payload.message))
        }
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return action.user
    case SIGNUP:
      return action.user
    default:
      return state
  }
}
