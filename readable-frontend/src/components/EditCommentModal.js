import React from 'react' 
import {Modal, Button} from 'react-bootstrap'


class EditCommentModal extends React.Component  {
    state = {
        input: this.props.comment.body
    }
    handleInputChange = (e) =>{
        this.setState({
            input: e.target.value
        })
    }
    render() {
        const {comment, show, onHandleClose} = this.props;
        return (
            <Modal show = {show} onHide={() => onHandleClose()} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit comment</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <label>{`${comment.author} says: `}</label>
                        <input type = 'text' value = {this.state.input} onChange = {this.handleInputChange} />
                    </form>
                    
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick = {() => onHandleClose()}>Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default EditCommentModal