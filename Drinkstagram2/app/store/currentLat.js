import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_CURRENT_LAT = 'SET_CURRENT_LAT'


/**
 * ACTION CREATORS
 */
export const setCurrentLat = lat => ({type: SET_CURRENT_LAT, lat})

/**
 * REDUCER
 */
export default function (state = 0, action) {
  switch (action.type) {
    case SET_CURRENT_LAT:
      return action.lat
    default:
      return state
  }
}
