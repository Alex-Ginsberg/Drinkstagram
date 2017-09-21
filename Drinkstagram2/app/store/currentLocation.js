import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION'


/**
 * ACTION CREATORS
 */
export const setCurrentLocation = location => ({type: SET_CURRENT_LOCATION, location})

/**
 * REDUCER
 */
export default function (state = '', action) {
  switch (action.type) {
    case SET_CURRENT_LOCATION:
      return action.location
    default:
      return state
  }
}
