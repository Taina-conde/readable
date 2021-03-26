import {
    getAll
} from '../utils/helpers'
import { receiveCategories } from './categories'
import {receivePosts } from './posts'

export function handleInitialData() {
    return (dispatch) => {
        return getAll()
            .then(({posts, categories}) => {
                console.log('posts2', posts)
                console.log('categories2', categories)
            
                dispatch(receivePosts(posts))
                dispatch(receiveCategories(categories.categories))
            })
    }
}