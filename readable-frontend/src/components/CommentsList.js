import React from 'react';
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import Comment from './Comment'
import NewComment from './NewComment'


class CommentsList extends React.Component {
    
    render(){
        const {comments, parentId} = this.props;
        return (
            <Container>
                {
                    Object.keys(comments).map((commentId) => {
                        return <Comment id = {commentId} key = {commentId}/>
                    })
                }
                <NewComment parentId = {parentId} />

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