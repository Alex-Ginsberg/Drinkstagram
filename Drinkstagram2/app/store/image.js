import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_IMAGE = 'SET_IMAGE'


/**
 * ACTION CREATORS
 */
export const setImage = image => ({type: SET_IMAGE, image})

/**
 * REDUCER
 */
export default function (state = '', action) {
  switch (action.type) {
    case SET_IMAGE:
      return action.image
    default:
      return state
  }
}
