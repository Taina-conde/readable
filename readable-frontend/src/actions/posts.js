export const ADD_POST = 'ADD_POST'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const DELETE_POST = 'DELETE_POST'
export const SAVE_VOTE = 'SAVE_VOTE'

export function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}