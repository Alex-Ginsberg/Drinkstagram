/**
 * ACTION TYPES
 */
const SET_USER_TEXT = 'SET_USER_TEXT'


/**
 * ACTION CREATORS
 */
export const setUserText = text => ({type: SET_USER_TEXT, text})

/**
 * REDUCER
 */
export default function (state = '', action) {
  switch (action.type) {
    case SET_USER_TEXT:
      return action.text
    default:
      return state
  }
}
