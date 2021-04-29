import { getAll, getCategoryPosts, saveNewComment } from "../utils/api";
import { receiveCategories, receiveCategoryPosts } from "./categories";
import { incrementComment, receivePosts } from "./posts";
import { addComment } from "./comments";

export function handleInitialData() {
  return (dispatch) => {
    return getAll()
    .then((res) => {
      const postsArr = res[0];
      let posts = {};
      postsArr.forEach((key) => {
        posts[key.id] = key;
      });

      const categoriesArr = res[1].categories;
      let categories = {};
      categoriesArr.forEach((key) => {
        categories[key.name] = key;
      });

      dispatch(receivePosts(posts));
      dispatch(receiveCategories(categories));
    });
  };
}
export function handleCategoryPosts(category) {
  return (dispatch) => {
    return getCategoryPosts(category)
    .then((posts) => {
      dispatch(receiveCategoryPosts(category, posts));
    });
  };
}
export function handleAddComment(parentId, body) {
  return (dispatch) => {
    return saveNewComment(parentId, body)
    .then((comment) => {
      dispatch(addComment(comment));
      dispatch(incrementComment(parentId, 1));
    });
  };
}
