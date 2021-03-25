import {
    RECEIVE_POSTS,
    ADD_POST,
    EDIT_POST,
    SAVE_VOTE,
    INCREMENT_COMMENT_COUNTER,
    DELETE_POST
} from '../actions/posts'

export default function postsReducer(state ={}, action) {
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
        case EDIT_POST:
            return {
                ...state,
                [action.post.id] : action.post
            }
        case SAVE_VOTE: 
            return {
                ...state,
                [action.id] : {
                    ...state[action.id],
                    voteScore : action.option === 'upVote' 
                        ? state[action.id].voteScore + 1
                        : state[action.id].voteScore - 1
                }
            }
        case INCREMENT_COMMENT_COUNTER: 
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    commentCount: state[action.id].commentCount + action.count
                }
            }
        case DELETE_POST: 
            return {
                ...state,
                [action.id] : {
                    ...state[action.id],
                    deleted: true
                }
            }
        
    }
}