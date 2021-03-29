import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'


class CommentsList extends React.Component {
    
    render(){
        return (
            <Container>


            </Container>
        )
    }
}
function mapStateToProps({posts}, {parentId}) {
    return{
        
    }
}
export default connect(mapStateToProps)(CommentsList);