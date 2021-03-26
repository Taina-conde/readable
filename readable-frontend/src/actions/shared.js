import {
    api,
    header
} from '../utils/helpers'

export function handleInitialData() {
    window.fetch(
        `${api}/posts`,
        header
    )
    .then((response) => response.json())
    .then((posts) => console.log(posts))
    
}