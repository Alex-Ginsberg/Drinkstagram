/**
 * ACTION TYPES
 */
const SET_SELECTED_BAR = 'SET_SELECTED_BAR'


/**
 * ACTION CREATORS
 */
export const setSelectedBar = bar => ({type: SET_SELECTED_BAR, bar})

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_SELECTED_BAR:
      return action.bar
    default:
      return state
  }
}
