import {
    RECEIVE_CATEGORIES,
    RECEIVE_CATEGORY_POSTS
} from '../actions/categories'

export default function categoriesReducer(state = {}, action) {
    switch(action.type) {
        case RECEIVE_CATEGORIES: 
            return {
                ...state,
                ...action.categories
            }
        case RECEIVE_CATEGORY_POSTS:
            return {
                ...state,
                [action.category] : {
                    ...state[action.category],
                    posts: {
                        ...action.posts
                    }
                }
            }
        default:
            return state
    }
}