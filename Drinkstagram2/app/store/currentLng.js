/**
 * ACTION TYPES
 */
const SET_CURRENT_LNG = 'SET_CURRENT_LNG'


/**
 * ACTION CREATORS
 */
export const setCurrentLng = lng => ({type: SET_CURRENT_LNG, lng})

/**
 * REDUCER
 */
export default function (state = 0, action) {
  switch (action.type) {
    case SET_CURRENT_LNG:
      return action.lng
    default:
      return state
  }
}
