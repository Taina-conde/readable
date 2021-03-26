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
            <Container>
                <Row>
                    <Col xs = 'auto'>
                        {post.title}
                    </Col>
                    <Col xs ='auto'>
                        {post.author}
                    </Col>
                    <Col xs = 'auto'>
                        {formatDate(post.timestamp)}
                    </Col>
                    
                </Row>
                
                <Row>
                    <Col>
                        <IoChatbubblesOutline/>
                        <span>{`${post.commentCount} ${post.commentCount == 1 ? 'comment': 'comments'}`}</span>
                    </Col>
                    <Col>
                        <BiDislike/>
                        <span>{post.voteScore}</span>
                        <BiLike/>
                    
                    </Col>
                    <Col>
                        <BiEdit/>
                    </Col>
                    <Col>
                        <BiTrash/>
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