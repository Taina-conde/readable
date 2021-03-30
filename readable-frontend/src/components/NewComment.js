import React from 'react'
import {Row, Col} from 'react-bootstrap';
import { IoHappyOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

class NewComment extends React.Component {
    state = {
        input: ''
    }
    render() {
        return (
            <Row className = 'new-comment-row'>
                <Col xs = '1' className = 'comment-icon pr-0 text-left'>
                    <IoHappyOutline size = {35}/>
                </Col>
                <Col xs = '11' className = 'pl-0'>
                    <form className = 'd-flex comment-form'>
                        <input className = ' col-11  comment-input' type= 'text' placeholder = 'Add a comment...'/>
                        <button type = 'submit' className = 'btn'>
                            <FiSend/>
                        </button>
                    </form>
                    
                </Col>
            </Row>
        )
    }
}
export default NewComment;