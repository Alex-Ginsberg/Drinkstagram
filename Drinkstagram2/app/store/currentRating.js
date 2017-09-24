/**
 * ACTION TYPES
 */
const SET_CURRENT_RATING = 'SET_CURRENT_RATING'


/**
 * ACTION CREATORS
 */
export const setCurrentRating = num => ({type: SET_CURRENT_RATING, num})

/**
 * REDUCER
 */
export default function (state = 0, action) {
  switch (action.type) {
    case SET_CURRENT_RATING:
      return action.num
    default:
      return state
  }
}
