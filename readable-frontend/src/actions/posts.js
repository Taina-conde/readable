export const ADD_POST = 'ADD_POST'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const DELETE_POST = 'DELETE_POST'
export const SAVE_VOTE = 'SAVE_VOTE'
export const EDIT_POST = 'EDIT_POST'
export const INCREMENT_COMMENT_COUNTER = 'INCREMENT_COMMENT_COUNTER'

export function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}
export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}
export function deletePost(id) {
    return {
        type: DELETE_POST,
        id
    }
}
export function saveVoteToPost(id, option) {
    return {
        type: SAVE_VOTE,
        id,
        option
    }
}
export function editPost(id, post) {
    return {
        type: EDIT_POST,
        id,
        post
    }
}
export function incrementComment(id, count) {
    return {
        type: INCREMENT_COMMENT_COUNTER,
        count
    }
}

