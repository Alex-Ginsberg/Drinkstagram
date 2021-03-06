import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

import userText from './userText'
import passwordText from './passwordText'
import user from './user'
import image from './image'
import posts from './posts'
import currentContent from './currentContent'
import currentRating from './currentRating'
import locations from './locations'
import currentLocation from './currentLocation'
import selectedBar from './selectedBar'
import currentDrinkName from './currentDrinkName'
import currentLat from './currentLat'
import currentLng from './currentLng'
import currentPost from './currentPost'
import currentComments from './currentComments'
import commentText from './commentText'
import allUsers from './allUsers'
import following from './following'

const reducer = combineReducers({userText, passwordText, user, image, posts, currentContent, currentRating, locations, currentLocation, selectedBar, currentDrinkName, currentLat, currentLng, currentPost, currentComments, commentText, allUsers, following})
const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

export * from './userText'
export * from './passwordText'
export * from './user'
export * from './image'
export * from './posts'
export * from './currentContent'
export * from './currentRating'
export * from './locations'
export * from './currentLocation'
export * from './selectedBar'
export * from './currentDrinkName'
export * from './currentLat'
export * from './currentLng'
export * from './currentPost'
export * from './currentComments'
export * from './commentText'
export * from './allUsers'
export * from './following'
export default store
