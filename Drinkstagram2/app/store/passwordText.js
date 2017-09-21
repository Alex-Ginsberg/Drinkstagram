
/**
 * ACTION TYPES
 */
const SET_PASSWORD_TEXT = 'SET_PASSWORD_TEXT'


/**
 * ACTION CREATORS
 */
export const setPasswordText = text => ({type: SET_PASSWORD_TEXT, text})

/**
 * REDUCER
 */
export default function (state = '', action) {
  switch (action.type) {
    case SET_PASSWORD_TEXT:
      return action.text
    default:
      return state
  }
}
