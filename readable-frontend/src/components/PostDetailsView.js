import React from 'react'; 
import {Container, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {formatDate} from '../utils/helpers'
import { IoChatbubblesOutline } from "react-icons/io5"
import { BiLike, BiDislike, BiEdit, BiTrash } from 'react-icons/bi'
import CommentsList from './CommentsList'
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
                <Container className ='post-box'>
                    <Row>
                        <Col xs = '8' className = 'post-title'>
                            {post.title}
                            
                        </Col>
                        <Col xs ='4' className = 'post-details d-flex p-0 align-items-center'>
                            <span className = 'col-4 p-0 text-center post-author'>
                                {`@${post.author}`}
                            </span> 
                            <span className = 'col-1 p-0 text-center'>
                                •
                            </span>
                            <span className = 'col-7 p-0 text-center'>
                                {formatDate(post.timestamp)}
                            </span>
                            
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col className= 'post-body mb-3'>
                            {post.body}
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <IoChatbubblesOutline className = 'text-success mr-1'/>
                            <span className = 'post-details'>{`${post.commentCount} ${post.commentCount === 1 ? 'comment': 'comments'}`}</span>
                        </Col>
                        <Col>
                            <BiDislike className = 'text-success mr-1'/>
                            <span className = 'post-vote'>{post.voteScore}</span>
                            <BiLike className = 'text-success ml-1'/>
                        
                        </Col>
                        <Col>
                            <BiEdit className = 'text-success'/>
                        </Col>
                        <Col>
                            <BiTrash className = 'text-success'/>
                        </Col>
                    </Row>

                </Container>
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