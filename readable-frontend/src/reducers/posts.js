import {
    RECEIVE_POSTS,
    ADD_POST,
    EDIT_POST,
    SAVE_VOTE,
    INCREMENT_COMMENT_COUNTER,
    DELETE_POST
} from '../actions/posts'

export default postsReducer(state ={}, action) {
    switch(action.type) {
        case RECEIVE_POSTS: 
            return {
                ...state,
                ...action.posts
            }
        case ADD_POST : 
            return {
                ...state,
                [action.post.id] : action.post
            }
        
    }
}