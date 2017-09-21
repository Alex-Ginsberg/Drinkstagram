import axios from 'axios'

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
        console.log('WE MADE IT: ', action.text)
      return action.text
    default:
      return state
  }
}
