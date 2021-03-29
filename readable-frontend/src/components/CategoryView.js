import React from 'react'; 
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Post from './Post'
class CategoryView extends React.Component {
    
    render(){
        const {category, postsIds} = this.props;
        
        console.log('category aqui', category)
        console.log('postsIds aqui',postsIds)
        
        
        return(
            <div> CATEGORY
                {postsIds && postsIds.length === 0 
                    ? <div>NO POSTS</div>
                    : <ul className = "posts-list">
                        {postsIds.map((post_id) => (
                            <li key = {post_id} className = 'post-list-item'>
                                <Link to = {`/${category.name}/${post_id}`} className = 'post-list-link' >
                                    <Post id = {post_id}/>
                                </Link>
                            </li>
                            
                        ))}
                    </ul>
                }
            </div>
        )
    }
}
function mapStateToProps({categories}, {match}) {
    const category = match.params.category
    
    return {
        category: categories[category],
        postsIds: categories[category].posts ? Object.keys(categories[category].posts) : null
        
        
        
    }
}
export default connect(mapStateToProps)(CategoryView);