import React from 'react'; 
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import Post from './Post';
import NewPostBtn from './NewPostBtn'

class HomeView extends React.Component {
    render(){
        const {postsIds, posts} = this.props;
        console.log('homeview posts', posts)
        return(
            <div>
                <NewPostBtn/>
                <ul className = "posts-list">
                    {postsIds.map((id) => (
                        <li key = {id} className = 'post-list-item'>
                            <Link to = {`/${posts[id].category}/${id}`} className = 'post-list-link' >
                                <Post id = {id}/>
                            </Link>
                        </li>
                        
                    ))}
                </ul>
            </div>
            
        )
    }
}
function mapStateToProps({posts}) {
    return {
        postsIds: Object.keys(posts),
        posts
    }
}
export default connect(mapStateToProps)(HomeView);