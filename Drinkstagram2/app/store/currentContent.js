/**
 * ACTION TYPES
 */
const SET_CONTENT_TEXT = 'SET_CONTENT_TEXT'


/**
 * ACTION CREATORS
 */
export const setContentText = text => ({type: SET_CONTENT_TEXT, text})

/**
 * REDUCER
 */
export default function (state = '', action) {
  switch (action.type) {
    case SET_CONTENT_TEXT:
      return action.text
    default:
      return state
  }
}
