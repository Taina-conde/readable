import {getPostComments} from '../utils/api'
export const ADD_COMMENT = 'ADD_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const SAVE_VOTE = 'SAVE_VOTE'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_PARENT = 'DELETE_PARENT'


export function handleFetchComments(parentId) {
    return (dispatch) => {
        return getPostComments(parentId)
            .then((comments) => {
                dispatch(receiveComments(comments))
            })
    }
}

export function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}
export function receiveComments(comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}
export function deleteComments(id) {
    return {
        type: DELETE_COMMENT,
        id
    }
}
export function saveVoteToComment(id, option) {
    return {
        type: SAVE_VOTE,
        id,
        option
    }
}
export function editComment(id, comment) {
    return {
        type: EDIT_COMMENT,
        id,
        comment
    }
}
export function deleteParent(id) {
    return {
        type: DELETE_PARENT,
        id
    }
}

