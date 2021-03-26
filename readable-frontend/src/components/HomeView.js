import React from 'react'; 
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import PostDetailsView from './PostDetailsView';

class HomeView extends React.Component {
    render(){
        const {posts} = this.props;
        return(
            <ul>
                {Object.keys(posts).map((post) => (
                    <Link to = {`/${post.category}/${post.id}`} key = {post.id}>
                        <PostDetailsView id = {post.id}/>
                    </Link>
                ))}
            </ul>
        )
    }
}
function mapStateToProps({posts}) {
    return {
        posts
    }
}
export default connect(mapStateToProps)(HomeView);