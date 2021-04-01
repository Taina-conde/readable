import React from 'react';
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import Comment from './Comment'



class CommentsList extends React.Component {
    
    render(){
        const {comments, commentCount} = this.props;
        return (
            <Container>
                {
                    commentCount === 0 
                    ? <div>This post has no comments yet</div>
                    : Object.keys(comments).map((commentId) => {
                        return <Comment id = {commentId} key = {commentId}/>
                    })
                }
            </Container>
        )
    }
}
function mapStateToProps({comments}) {
    return{
        comments
    }
}
export default connect(mapStateToProps)(CommentsList);