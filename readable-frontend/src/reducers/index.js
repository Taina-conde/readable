import { combineReducers } from 'redux' 
import commentsReducer from './comments'
import postsReducer from './posts'

export default combineReducers({
    comments: commentsReducer,
    posts : postsReducer
})