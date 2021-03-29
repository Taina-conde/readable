import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

class Comment extends React.Component{
    render(){
        const {comment} = this.props;
        return(
            <Row>
                <Col>
                {comment.id}
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