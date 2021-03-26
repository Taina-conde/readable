import {
    api,
    header
} from '../utils/helpers'

export async function handleInitialData() {
    const postResponses = await window.fetch(
        `${api}/posts`,
        header
    );
    console.log('aaaaaaaa', postResponses);
    const posts = await postResponses.json();
    console.log('bbbbbbbbb', posts)
    return postResponses;
}