/**
 * ACTION TYPES
 */
const SET_CURRENT_POST = 'SET_CURRENT_POST'


/**
 * ACTION CREATORS
 */
export const setCurrentPost = post => ({type: SET_CURRENT_POST, post})

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_POST:
      return action.post
    default:
      return state
  }
}
