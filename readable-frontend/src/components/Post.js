import React from 'react'; 
import {Container, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {formatDate} from '../utils/helpers'
import PostButtons from './PostButtons'

class Post extends React.Component {
    render(){
        const { post, parent} = this.props
        
        return(
            <Container className = {parent === 'PostDetailsView'? 'post-box': ''}>
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
                {parent === 'PostDetailsView' 
                    && (
                    <Row>
                        <Col className= 'post-body mb-3'>
                            {post.body}
                        </Col>
                    </Row>
                    )
                }
                <PostButtons id = {post.id}/>
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