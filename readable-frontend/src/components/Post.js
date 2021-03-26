import React from 'react'; 
import {Container, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
class Post extends React.Component {
    render(){
        const {posts, id} = this.props
        const post = posts[id]
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
function mapStateToProps({posts}) {
    return {
        posts
    }
}
export default connect(mapStateToProps)(Post);