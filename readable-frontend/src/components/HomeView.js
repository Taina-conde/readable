import React from 'react'; 
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import PostDetailsView from './PostDetailsView';

class HomeView extends React.Component {
    render(){
        const {postsIds, posts} = this.props;
        console.log('homeview posts', posts)
        return(
            <ul>
                {postsIds.map((id) => (
                    <li key = {id}>
                        <Link to = {`/${posts[id].category}/${id}`} >
                            <PostDetailsView id = {id}/>
                        </Link>
                    </li>
                    
                ))}
            </ul>
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