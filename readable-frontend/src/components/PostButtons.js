import React from 'react' 
import {Row, Col} from 'react-bootstrap'
import { IoChatbubblesOutline } from "react-icons/io5"
import { BiLike, BiDislike, BiEdit, BiTrash } from 'react-icons/bi'
import {connect } from 'react-redux'

class PostButtons extends React.Component {
    render() {
        const {post}= this.props;
        return (
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
        )
    }
}
function mapStateToProps({posts}, {id}) {
    return {
        post: posts[id]
    }
}
export default connect(mapStateToProps)(PostButtons);
