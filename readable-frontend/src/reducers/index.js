import { combineReducers } from 'redux' 
import commentsReducer from './comments'
import postsReducer from './posts'
import categoriesReducer from './categories'

export default combineReducers({
    comments: commentsReducer,
    posts : postsReducer,
    categories: categoriesReducer
})