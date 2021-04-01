import React from 'react' 
import {Row, Col} from 'react-bootstrap'
import { IoChatbubblesOutline } from "react-icons/io5"
import { BiLike, BiDislike, BiEdit, BiTrash } from 'react-icons/bi'
import {connect } from 'react-redux'

class PostButtons extends React.Component {
    render() {
        const {post}= this.props;
        return (
            <Row className = 'mt-2'>
                <Col className = 'd-flex align-items-center'>
                    <button type = 'button' className = 'post-btn col-2 d-flex'>
                        <IoChatbubblesOutline className = 'text-success col-12 p-0' size = {20} />
                    </button>
                    <span className = 'post-details col-9 p-0 ml-1'>{`${post.commentCount} ${post.commentCount === 1 ? 'comment': 'comments'}`}</span>
                </Col>
                <Col className = 'd-flex align-items-center'>
                    <button type = 'button' className = 'post-btn col-2 d-flex mr-1'>
                        <BiDislike className = 'text-success col-12 p-0' size = {20} />
                    </button>
                    
                    <span className = 'post-vote'>{post.voteScore}</span>
                    
                    <button type = 'button' className = 'post-btn col-2 d-flex ml-1'>
                        <BiLike className = 'text-success col-12 p-0' size = {20} />
                    </button>
                
                </Col>
                <Col className = 'd-flex align-items-center'>
                    <button type = 'button' className = 'post-btn col-2 d-flex'>
                        <BiEdit className = 'text-success col-12 p-0' size = {20} />
                    </button>
                </Col>
                <Col className = 'd-flex align-items-center'>
                    <button type = 'button' className = 'post-btn col-2 d-flex'>
                        <BiTrash className = 'text-success col-12 p-0' size = {20} />
                    </button>
                </Col>
            </Row>
        )
    }
}
function mapStateToProps({posts}, {id}) {
    return {
        post: posts[id]
    }
}
export default connect(mapStateToProps)(PostButtons);
