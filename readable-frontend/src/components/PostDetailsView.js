import React from 'react'; 
import {connect} from 'react-redux'
import CommentsList from './CommentsList'
import Post from './Post'
import NewComment from './NewComment'
import { handleFetchComments } from '../actions/comments'


class PostDetailsView extends React.Component {
    componentDidMount() {
        const {post, handleFetchComments} = this.props;
        console.log('props in details', this.props)
        handleFetchComments(post.id)
        
    }
    render(){
        const { post} = this.props
        
        return(
            <div> 
                <Post parent = 'PostDetailsView' id ={post.id}/>      
                <div className= 'row comments-title'>
                    
                    <div className = 'col col-md-5 comments-hr p-0'><hr/></div>
                    <div className = 'col col-md-2'>
                        Comments
                    </div>
                    <div className = 'col col-md-5 comments-hr p-0'><hr/></div>
                    
                </div>
                <CommentsList commentCount = {post.commentCount} />
                <NewComment parentId = {post.id} />
            </div>
        )
    }
}
function mapStateToProps({posts}, {match}) {
    const id = match.params.post_id
    return {
        post: posts[id]
    }
}
export default connect(mapStateToProps, {handleFetchComments})(PostDetailsView);