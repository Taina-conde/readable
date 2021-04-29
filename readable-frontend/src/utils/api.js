import { formatComment, formatPost } from "./helpers";
const api = "http://localhost:3001";
const header = {
  headers: {
    Authorization: "postIt",
  },
};

export async function getAll() {
  const postResponses = await window.fetch(`${api}/posts`, header);
  const posts = await postResponses.json();
  const categoriesResponses = await window.fetch(`${api}/categories`, header);
  const categories = await categoriesResponses.json();
  return [posts, categories];
}

export async function getCategoryPosts(category) {
  const postResponses = await window.fetch(`${api}/${category}/posts`, header);
  const postsArr = await postResponses.json();

  let posts = {};
  postsArr.forEach((key) => {
    posts[key.id] = key;
  });
  return posts;
}
export async function getPostComments(parentId) {
  const commentsResponses = await window.fetch(
    `${api}/posts/${parentId}/comments`,
    header
  );
  const commentsArr = await commentsResponses.json();

  let comments = {};
  commentsArr.forEach((key) => {
    comments[key.id] = key;
  });
  return comments;
}

export async function saveNewComment(parentId, body) {
  const formattedComment = formatComment(parentId, body);
  const response = await window.fetch(`${api}/comments`, {
    method: "POST",
    headers: {
      Authorization: "postIt",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formattedComment),
  });

  const commentResponse = await response.json();
  return {
    ...formattedComment,
    ...commentResponse,
  };
}

export async function saveNewPost(author, title, body, category) {
  const formattedPost = formatPost(author, title, body, category);
  const response = await window.fetch(`${api}/posts`, {
    method: "POST",
    headers: {
      Authorization: "postIt",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formattedPost),
  });

  const postResponse = await response.json();
  return {
    ...postResponse,
    ...formattedPost,
  };
}
export async function saveVote(id, option) {
  const response = await window.fetch(`${api}/posts/${id}`, {
    method: "POST",
    headers: {
      Authorization: "postIt",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ option }),
  });

  const voteResponse = await response.json();
  return voteResponse;
}
export async function deletePostApi(id) {
  const response = await window.fetch(`${api}/posts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "postIt",
    },
  });

  const deleteResponse = await response.json();
  return;
}
export async function editPostApi(id, title, body) {
  const response = await window.fetch(`${api}/posts/${id}`, {
    method: "PUT",
    headers: {
      Authorization: "postIt",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });

  const editResponse = await response.json();
  return editResponse;
}
export async function saveVoteToCommentApi(id, option) {
  const response = await window.fetch(`${api}/comments/${id}`, {
    method: "POST",
    headers: {
      Authorization: "postIt",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ option }),
  });

  const voteResponse = await response.json();
  return voteResponse;
}
export async function deleteCommentApi(id) {
  const response = await window.fetch(`${api}/comments/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "postIt",
    },
  });

  const deleteResponse = await response.json();
  return;
}
export async function editCommentApi(id, body) {
  console.log("dentror");
  const response = await window.fetch(`${api}/comments/${id}`, {
    method: "PUT",
    headers: {
      Authorization: "postIt",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ timestamp: Date.now(), body }),
  });
  
  const editResponse = await response.json();
  return editResponse;
}
