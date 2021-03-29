import React from 'react'; 
import {Container, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import CommentsList from './CommentsList'
import Post from './Post'
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
            <Container> 
                <Post parent = 'PostDetailsView' id ={post.id}/>      
                <Container >
                    <Row className = 'comments-title'>
                        <Col xs='5' className = 'comments-hr p-0'><hr/></Col>
                        <Col xs = '2'>
                            Comments
                        </Col>
                        <Col xs = '5' className = 'comments-hr p-0'><hr/></Col>
                    </Row>
                </Container>
                {post.commentCount === 0 
                    ? <div>This post has no comments yet</div>
                    : <CommentsList />
                }
                
            </Container>
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