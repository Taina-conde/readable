import React from 'react';
import { connect } from 'react-redux'
import Comment from './Comment'



class CommentsList extends React.Component {
    
    render(){
        const {comments, commentCount} = this.props;
        return (
            <div>
                {
                    commentCount === 0 
                    ? <div className = 'no-comments'>This post has no comments yet</div>
                    : Object.keys(comments).map((commentId) => {
                        return <Comment id = {commentId} key = {commentId}/>
                    })
                }
            </div>
        )
    }
}
function mapStateToProps({comments}) {
    return{
        comments
    }
}
export default connect(mapStateToProps)(CommentsList);