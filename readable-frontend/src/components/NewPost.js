import React from 'react'
import {Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux'
import { handleAddComment } from '../actions/shared'
import { generateUserIcon } from '../utils/helpers'

class NewComment extends React.Component {
    state = {
        input: ''
    }
    handleInputChange = (event) => {
        this.setState({
            input: event.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {dispatch, parentId} = this.props;
        const body = this.state.input;
        dispatch(handleAddComment(parentId, body))
        this.setState({
            input: ""
        })


    }
    render() {
        const {input} = this.state;
        return (
            <Row className = 'new-post-row'>
                <Col xs = '1' className = 'user-image p-0 text-center'>
                    {generateUserIcon()}
                </Col>
                <Col xs = '11' className = 'p-0'>
                    <form className = 'd-flex post-form' onSubmit = {this.handleSubmit}>
                        <input 
                            className = ' col-11 post-input' 
                            type= 'text' 
                            placeholder = 'Add a comment...' 
                            value = {input}
                            onChange = {this.handleInputChange} 
                        />
                        <button type = 'submit' className ='post-submit-btn'>
                            Post 
                        </button>
                    </form>
                    
                </Col>
            </Row>
        )
    }
}
export default connect()(NewComment);