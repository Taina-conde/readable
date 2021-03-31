import { formatComment } from './helpers'
const api =  'http://localhost:3001'
const header = {
    headers: { 
        'Authorization': 'postIt' 
    }
}

export async function getAll(){
    const postResponses = await window.fetch(
        `${api}/posts`,
        header
    );
    const posts = await postResponses.json();
    const categoriesResponses = await window.fetch(
        `${api}/categories`,
        header
    )
    const categories = await categoriesResponses.json();
    console.log('posts', posts)
    console.log('categories', categories)

    return [posts, categories]
}

export async function getCategoryPosts(category) {
    const postResponses = await window.fetch(
        `${api}/${category}/posts`,
        header
    )
    const postsArr = await postResponses.json();
    
    let posts = {}
    postsArr.forEach( key => {
        posts[key.id] = key   
    })
    console.log('category posts: ', posts)
    return posts
}
export async function getPostComments(parentId) {
    const commentsResponses = await window.fetch(
        `${api}/posts/${parentId}/comments`,
        header
    )
    const commentsArr = await commentsResponses.json();
    console.log('commentsArr: ', commentsArr)

    let comments = {}
    commentsArr.forEach( key => {
        comments[key.id] = key
    })
    console.log('comments obj', comments)
    return comments
}

export async function saveNewComment(parentId, body) {
    const formattedComment = formatComment(parentId, body)
    const response = await window.fetch(
        `${api}/comments`,
        {
            method: 'POST',
            headers: { 
                'Authorization': 'postIt',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(formattedComment),
        }
    )
    const commentResponse = await response.json();
    console.log('saveNewComment', commentResponse)
    return {
        ...formattedComment,
        ...commentResponse
    }
}