import React from 'react' 
import {Modal, Button} from 'react-bootstrap'

class EditCommentModal extends React.Component  {
    state = {
        input: ""
    }
    render() {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input type = 'text' />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}
export default EditCommentModal