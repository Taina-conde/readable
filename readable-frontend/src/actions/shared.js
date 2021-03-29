import {
    getAll,
    getCategoryPosts
} from '../utils/helpers'
import { receiveCategories, receiveCategoryPosts } from './categories'
import {receivePosts } from './posts'

export function handleInitialData() {
    return (dispatch) => {
        return getAll()
            .then((res) => {
                console.log('res', res)
                const postsArr = res[0]
                let posts = {}
                postsArr.forEach( key => {
                    console.log('key', key)
                    posts[key.id] = key   
                })
                const categoriesArr = res[1].categories
                let categories = {}
                categoriesArr.forEach( key => {
                    console.log('category key', key)
                    categories[key.name] = key
                })
                console.log('posts2', posts)
                console.log('categories2', categories)
            
                dispatch(receivePosts(posts))
                dispatch(receiveCategories(categories))
            })
    }
}
export function handleCategoryPosts(category) {
    return (dispatch) => {
        return getCategoryPosts(category)
            .then((posts) => {
                dispatch(receiveCategoryPosts(category, posts))
                }
            )
    }
}
