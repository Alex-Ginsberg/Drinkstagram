import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_CURRENT_COMMENTS = 'SET_CURRENT_COMMENTS'
const NEW_COMMENT = 'NEW_COMMENT'


/**
 * ACTION CREATORS
 */
export const setCurrentComments = comments => ({type: SET_CURRENT_COMMENTS, comments})
export const postNewComment = comment => ({type: NEW_COMMENT, comment})

export const fetchComments = (id) =>
dispatch =>
  axios.get(`http://172.16.23.37:3000/comments/${id}`)
    .then(res => res.data)
    .then(comments => {
        console.log('FETCH: ', comments)
        dispatch(setCurrentComments(comments))
    })
    .catch(err => console.log(err))

export const postComment = (content, userId, postId) =>
dispatch => 
    axios.post('http://172.16.23.37:3000/comments/', {content, userId, postId})
      .then(comment => {
        console.log('IN POSTCOMNET: ', comment)
        dispatch(postNewComment(comment.data))
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case SET_CURRENT_COMMENTS:
      return action.comments
    case NEW_COMMENT:
      return [...state, action.comment]
    default:
      return state
  }
}
