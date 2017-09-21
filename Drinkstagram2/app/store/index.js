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

const reducer = combineReducers({userText, passwordText, user, image, posts, currentContent, currentRating, locations, currentLocation, selectedBar})
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
export default store
