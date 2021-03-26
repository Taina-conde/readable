import React from 'react'; 
import {Container, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
class Post extends React.Component {
    render(){
        const { post} = this.props
        
        return(
            <Container>
                <Row>
                    <Col>
                        {post.author}
                    </Col>
                    <Col>
                        {post.timestamp}
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        {post.body}
                    </Col>
                </Row>
                <Row>
                    <Col>
                    REPLY / COMMENT + number of comments
                    </Col>
                    <Col>
                    UPVOTE/ DOWNVOTE + score
                    </Col>
                    <Col>
                    EDIT
                    </Col>
                    <Col>
                    DELETE
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