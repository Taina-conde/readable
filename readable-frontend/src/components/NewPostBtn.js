import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import { HiPlus } from "react-icons/hi";


const NewPostBtn = (props) => {
    return (
        <Container>
            <Row className = 'mt-3'>
                <Col xs = '2' lg= '1' className = ' p-0 d-flex '>
                    <div className = 'user-image d-flex justify-content-center align-items-end'>
                        {props.userIcon}
                    </div>
                    
                </Col>
                <Col xs = '10'  lg= '11' className = 'p-2 '>  
                    <button type = 'button' className =' new-post-btn' onClick = {() => props.onHandleShow()}>
                        <span>
                            Create a new post
                            <HiPlus size= {25}/>
                        </span>
                        
                    </button>
                
                    
                </Col>
            </Row>
        </Container>
    )
    
}
export default NewPostBtn;