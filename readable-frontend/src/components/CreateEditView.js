import React from 'react';
import {Modal, Button} from 'react-bootstrap'; 
class CreateEditView extends React.Component {
    render(){
        return(
            <div>
                <Modal show={this.props.show} onHide={() => this.props.onHandleClose()}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.props.onHandleClose()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => this.props.onHandleClose()}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default CreateEditView;