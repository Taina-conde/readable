import React from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap'; 
import {selectAuthor, capitalize} from '../utils/helpers'
import { connect } from 'react-redux'
class CreateEditView extends React.Component {
    state = {
        categorySelected: "",
        title: "",
        body: "",
        author: selectAuthor()
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        })
    }

    handleSaveChanges= () => {
        const {parent} = this.props;
        
        this.props.onHandleClose()
    }
    render(){
        
        const {show, parent, onHandleClose, userIcon, categories} = this.props;
        const { title, body, author, categorySelected} = this.state;
        console.log('categories', categories)
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
                            <Form.Group as ={Row} className = 'align-items-baseline'>
                                <Form.Label as = "legend" column xs ={2}>
                                    Category: 
                                </Form.Label>
                                <Col xs = {10}>
                                    {categories.map( (category) => (
                                         <Form.Check
                                            type="radio"
                                            label={capitalize(category)}
                                            name='categorySelected'
                                            id = {category}
                                            value = {category}
                                            key = {category}
                                            onChange = {this.handleInputChange}
                                        />
                                    ))}
                                </Col>
                            </Form.Group>  
                            <Form.Control 
                                type="text" 
                                placeholder="Choose a title" 
                                className = 'mt-4 mb-4' 
                                value = {title} 
                                name = 'title'
                                onChange = {this.handleInputChange}
                            />
                            
                            <Form.Control 
                                as = 'textarea' 
                                rows = {5}  
                                placeholder = 'Share your thoughts...' 
                                value = {body}
                                name = 'body'
                                onChange = {this.handleInputChange}
                            />
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => onHandleClose()}>
                        Close
                    </Button>
                    <Button 
                        variant="success" 
                        onClick={this.handleSaveChanges} 
                        disabled = {!categorySelected || !title || !body ? true: false }
                    >
                        {parent === 'HomeView' ? 'Post' : 'Save Changes'}
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
function mapStateToProps({posts, comments, categories}) {
    return {
        posts,
        comments,
        categories: Object.keys(categories)
    }
}
export default connect(mapStateToProps)(CreateEditView);