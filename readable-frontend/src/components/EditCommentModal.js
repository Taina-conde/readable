import React from 'react' 
import {Modal, Button, Form, } from 'react-bootstrap'
import { handleEditComment} from '../actions/comments'
import {capitalize} from '../utils/helpers'
import {connect} from 'react-redux'


class EditCommentModal extends React.Component  {
    state = {
        body: this.props.comment.body,
    }
    handleInputChange = (event) =>{
        this.setState(() => ({
            body: event.target.value,
        }))
    }
    handleSaveChanges = ()=> {
        const {comment, onHandleClose, dispatch} = this.props;
        const {body} = this.state;
        console.log(comment, body)
        dispatch(handleEditComment(comment.id, body));
        onHandleClose();

    }
    render() {
        const {comment, show, onHandleClose} = this.props;
        return (
            <Modal show = {show} onHide={() => onHandleClose()} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit comment</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group>
                           <Form.Label as = 'legend'>{`${capitalize(comment.author)} says: `}</Form.Label>
                            <Form.Control type = 'text' value = {this.state.body} onChange = {this.handleInputChange} /> 
                        </Form.Group>
                        
                    </Form>
                    
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick = {() => onHandleClose()}>Close</Button>
                    <Button variant="primary" onClick = {this.handleSaveChanges}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default connect()(EditCommentModal)