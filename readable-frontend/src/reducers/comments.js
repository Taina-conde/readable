import {
    RECEIVE_COMMENTS,
    ADD_COMMENT,
    EDIT_COMMENT,
    SAVE_VOTE,
    DELETE_PARENT,
    DELETE_COMMENT
} from '../actions/posts'

export default commentsReducer(state ={}, action) {
    switch(action.type) {
        case RECEIVE_COMMENTS: 
            return {
                ...state,
                ...action.comments
            }
        case ADD_COMMENT : 
            return {
                ...state,
                [action.comment.id] : action.comment
            }
        case EDIT_COMMENT:
            return {
                ...state,
                [action.comment.id] : action.comment
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
        case DELETE_PARENT: 
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    parentDeleted: true
                }
            }
        case DELETE_COMMENT: 
            return {
                ...state,
                [action.id] : {
                    ...state[action.id],
                    deleted: true
                }
            }
        
    }
}