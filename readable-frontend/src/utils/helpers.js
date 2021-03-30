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
export async function saveNewComment(parentId, body) {
    const formattedComment = formatComment(parentId, body)
    const response = await window.fetch(
        `${api}/comments`,
        {
            method: 'POST',
            headers: header.headers,
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

export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
function formatComment(parentId, body) {
    return {
        id: generateUID(),
        parentId,
        timestamp : Date.now(),
        body,
        author: selectAuthor(),
    }
}
function getRandomIndex(length) {
    return Math.floor(Math.random()*length)
}
function selectAuthor() {
    const adjectives = ['pretty', 'slutty', 'lover', 'flirty', 'foracious', 'grateful', 'acclaimed', 'amused', 'passionate', 'awsome', 'happy', 'devoted', 'pleased', 'dedicated', 'hardworking', 'fair', 'lonely', 'stressed', 'obsessed', 'attractive', 'ambitious', 'amazing', 'bewitched', 'brilliant', 'unique' ]
    const substantives = ['meat', 'tree', 'person', 'mother', 'student', 'dog', 'cat', 'fame', 'beauty', 'woman', 'man', 'hero', 'listener', 'nature', 'human', 'ghost', 'wizard', 'witch', 'sorcerer', 'vigilante', 'fairy', 'vampire', 'engineer', 'thing', 'worker', 'millenial', 'parent', 'citizen']

    const author = adjectives[getRandomIndex(adjectives.length)] + substantives[getRandomIndex(substantives.length)]
    return author

}