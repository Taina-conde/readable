import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import { generateUserIcon } from '../utils/helpers'
import { HiPlus } from "react-icons/hi";

const NewPostBtn = () => {
    return (
        <Container>
            <Row className = 'p-3'>
                <Col xs = '2' className = ' p-0 d-flex justify-content-center'>
                    <div className = 'user-image d-flex justify-content-center align-items-end'>
                        {generateUserIcon()}
                    </div>
                    
                </Col>
                <Col xs = '10' className = 'p-2 d-flex'>
                        
                    <button type = 'submit' className ='col-12 post-submit-btn'>
                        Create a new post
                        <HiPlus size= {25}/>
                    </button>
                
                    
                </Col>
            </Row>
        </Container>
    )
    
}
export default NewPostBtn;