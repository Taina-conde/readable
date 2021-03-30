import React from 'react';
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import Comment from './Comment'



class CommentsList extends React.Component {
    
    render(){
        const {comments} = this.props;
        return (
            <Container>
                {
                    Object.keys(comments).map((commentId) => {
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