export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY_POSTS = "RECEIVE_CATEGORY_POSTS";

export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  };
}

export function receiveCategoryPosts(category, posts) {
  return {
    type: RECEIVE_CATEGORY_POSTS,
    category,
    posts,
  };
}
