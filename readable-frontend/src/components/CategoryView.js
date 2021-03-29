import React from 'react'; 
import { connect } from 'react-redux'

import {Link} from 'react-router-dom'
import Post from './Post'
class CategoryView extends React.Component {
    componentDidMount() {
        
    }
    render(){
        const {postsIds, posts} = this.props;
        console.log('categoryView posts', posts)
        return(
            <div> CATEGORY

            
            <ul className = "posts-list">
                {/*postsIds.map((id) => (
                    <li key = {id} className = 'post-list-item'>
                        <Link to = {`/${posts[id].category}/${id}`} className = 'post-list-link' >
                            <Post id = {id}/>
                        </Link>
                    </li>
                    
                ))*/}
            </ul>
            </div>
        )
    }
}
function mapStateToProps({categories}, {category}) {
    return {
        postsIds: Object.keys(categories[category].posts)
    }
}
export default connect(mapStateToProps)(CategoryView);