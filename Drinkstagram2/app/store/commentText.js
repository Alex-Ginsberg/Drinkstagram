/**
 * ACTION TYPES
 */
const SET_COMMENT_TEXT = 'SET_COMMENT_TEXT'


/**
 * ACTION CREATORS
 */
export const setCommentText = text => ({type: SET_COMMENT_TEXT, text})

/**
 * REDUCER
 */
export default function (state = '', action) {
  switch (action.type) {
    case SET_COMMENT_TEXT:
      return action.text
    default:
      return state
  }
}
