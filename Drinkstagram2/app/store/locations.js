import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_LOCATIONS = 'GET_LOCATIONS'
const NEW_LOCATION = 'NEW_LOCATION'




/**
 * ACTION CREATORS
 */
export const getLocations = locations => ({type: GET_LOCATIONS, locations})
export const newLocation = location => ({type: NEW_LOCATION, location})



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


export const postLocation = (data, details, content, rating, userId, image) =>
dispatch =>
  axios.post('http://172.16.23.37:3000/locations', {data, details, content, rating, userId, image})
    .then(res => res.data)
    .then(location => {
      dispatch(newLocation(location))
    })
    .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_LOCATIONS:
      return action.locations
    case NEW_LOCATION:
      return [...state, action.location]
    default:
      return state
  }
}
