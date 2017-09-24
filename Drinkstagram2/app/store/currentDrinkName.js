/**
 * ACTION TYPES
 */
const SET_DRINK_TEXT = 'SET_DRINK_TEXT'


/**
 * ACTION CREATORS
 */
export const setDrinkText = text => ({type: SET_DRINK_TEXT, text})

/**
 * REDUCER
 */
export default function (state = '', action) {
  switch (action.type) {
    case SET_DRINK_TEXT:
      return action.text
    default:
      return state
  }
}
