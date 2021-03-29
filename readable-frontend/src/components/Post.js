import React from 'react'; 
import {Container, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {formatDate} from '../utils/helpers'
import { IoChatbubblesOutline } from "react-icons/io5"
import { BiLike, BiDislike, BiEdit, BiTrash } from 'react-icons/bi'
class Post extends React.Component {
    render(){
        const { post} = this.props
        
        return(
            <Container className =''>
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
        )
    }
}
function mapStateToProps({posts}, {id}) {
    return {
        post: posts[id]
    }
}
export default connect(mapStateToProps)(Post);