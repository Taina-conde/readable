import {
  saveNewPost,
  saveVote,
  deletePostApi,
  editPostApi,
} from "../utils/api";
export const ADD_POST = "ADD_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const DELETE_POST = "DELETE_POST";
export const SAVE_VOTE_TO_POST = "SAVE_VOTE_TO_POST";
export const EDIT_POST = "EDIT_POST";
export const INCREMENT_COMMENT_COUNTER = "INCREMENT_COMMENT_COUNTER";

export function handleEditPost(id, title, body) {
  return (dispatch) => {
    return editPostApi(id, title, body).then((edditedPost) => {
      dispatch(editPost(id, edditedPost));
    });
  };
}

export function createPost(author, title, body, category) {
  return (dispatch) => {
    return saveNewPost(author, title, body, category).then((newPost) => {
      dispatch(addPost(newPost));
    });
  };
}
export function saveVoteToPost(id, option) {
  return (dispatch) => {
    return saveVote(id, option).then(() => {
      dispatch(vote(id, option));
    });
  };
}
export function handleDeletePost(id) {
  return (dispatch) => {
    return deletePostApi(id).then(() => {
      dispatch(deletePost(id));
    });
  };
}
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}
export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  };
}
export function deletePost(id) {
  return {
    type: DELETE_POST,
    id,
  };
}
export function vote(id, option) {
  return {
    type: SAVE_VOTE_TO_POST,
    id,
    option,
  };
}
export function editPost(id, post) {
  return {
    type: EDIT_POST,
    id,
    post,
  };
}
export function incrementComment(id, count) {
  return {
    type: INCREMENT_COMMENT_COUNTER,
    count,
    id,
  };
}
