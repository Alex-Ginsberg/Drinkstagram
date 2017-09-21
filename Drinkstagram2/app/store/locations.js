import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_LOCATIONS = 'GET_LOCATIONS'




/**
 * ACTION CREATORS
 */
export const getLocations = locations => ({type: GET_LOCATIONS, locations})



/**
 * Thunk Middleware
 */
export const fetchLocations = () =>
dispatch =>
  axios.get('http://172.16.23.37:3000/locations')
    .then(res => res.data)
    .then(posts => {
        dispatch(getLocations(posts))
    })    
    .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_LOCATIONS:
      return action.locations
    default:
      return state
  }
}
