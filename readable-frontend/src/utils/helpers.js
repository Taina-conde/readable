export const api =  'http://localhost:3001'
export const header = {
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

export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }