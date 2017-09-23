import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_CURRENT_COMMENTS = 'SET_CURRENT_COMMENTS'


/**
 * ACTION CREATORS
 */
export const setCurrentComments = comments => ({type: SET_CURRENT_COMMENTS, comments})

export const fetchComments = (id) =>
dispatch =>
  axios.get(`http://172.16.23.37:3000/comments/${id}`)
    .then(res => res.data)
    .then(comments => {
        console.log('FETCH: ', comments)
        dispatch(setCurrentComments(comments))
    })
    .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case SET_CURRENT_COMMENTS:
      return action.comments
    default:
      return state
  }
}
