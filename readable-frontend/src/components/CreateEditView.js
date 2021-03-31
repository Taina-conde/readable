import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap'; 
import {selectAuthor} from '../utils/helpers'
import { connect } from 'react-redux'
class CreateEditView extends React.Component {
    render(){
        const author = selectAuthor()
        const {show, parent, onHandleClose, userIcon} = this.props;
        return(
            <div>
                <Modal show={show} onHide={() => onHandleClose()}>
                    <Modal.Header closeButton>
                    <Modal.Title>
                        {parent === 'HomeView' && 
                            <span>
                                Create a new post
                            </span>
                        }
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {userIcon && (
                                <div className= 'm-2'>
                                    {userIcon}
                                    <span className = 'ml-3'><strong>{author}</strong></span>
                                </div>
                            )
                        
                        }
                        <Form className = 'mt-3'>    

                            <Form.Control type="text" placeholder="Choose a title" className = 'mt-4 mb-4'/>
                            
                            <Form.Control as = 'textarea' rows = {5} placeholder = 'Share your thoughts...'/>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => onHandleClose()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => onHandleClose()}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
function mapStateToProps({posts, comments}) {
    return {
        posts,
        comments
    }
}
export default connect(mapStateToProps)(CreateEditView);