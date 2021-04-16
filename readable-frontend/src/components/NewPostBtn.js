import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import { HiPlus } from "react-icons/hi";


const NewPostBtn = (props) => {
    return (
        <Container>
            <Row className = 'p-3'>
                <Col xs = '2' className = ' p-0 d-flex justify-content-center'>
                    <div className = 'user-image d-flex justify-content-center align-items-end'>
                        {props.userIcon}
                    </div>
                    
                </Col>
                <Col xs = '10' className = 'p-2 d-flex'>  
                    <button type = 'button' className ='col-12 post-submit-btn' onClick = {() => props.onHandleShow()}>
                        Create a new post
                        <HiPlus size= {25}/>
                    </button>
                
                    
                </Col>
            </Row>
        </Container>
    )
    
}
export default NewPostBtn;