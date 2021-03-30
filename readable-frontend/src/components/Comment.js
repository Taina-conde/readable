import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { BiLike, BiDislike, BiDotsHorizontalRounded } from 'react-icons/bi'

class Comment extends React.Component{
    render(){
        const {comment} = this.props;
        return(
            <Row className = 'comment-box align-items-center'>
                <Col xs = '3' className = 'comment-author pr-0'>
                    {comment.author.charAt(0).toUpperCase() + comment.author.slice(1)} says: 
                </Col>
                <Col xs = '7' className = 'comment-body pl-0'>
                    {comment.body}
                </Col>
                <Col xs = '2' className = 'd-flex flex-column'>
                    <div className = 'col p-0 text-center'>
                        <BiDotsHorizontalRounded className= 'text-success' size = {28}/>
                    </div>
                    <div className = 'col p-0 text-center'>
                        <BiDislike className = 'text-success mr-1'/>
                        <span className = 'post-vote'>{comment.voteScore}</span>
                        <BiLike className = 'text-success ml-1'/>
                    </div>

                </Col>
            </Row>
        )
    }
}
function mapStateToProps({comments}, {id}) {
    return {
        comment: comments[id]
    }
}
export default connect(mapStateToProps)(Comment)