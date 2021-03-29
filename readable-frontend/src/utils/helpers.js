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

export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }