import React from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap'; 
import {selectAuthor, capitalize} from '../utils/helpers'
import { connect } from 'react-redux'
import { createPost, handleEditPost } from '../actions/posts'
class CreateEditView extends React.Component {
    state = {
        category: this.props.post ? this.props.post.category : "",
        title: this.props.post ? this.props.post.title : "",
        body: this.props.post ? this.props.post.body : "",
        author: this.props.post ? this.props.post.author : selectAuthor(),
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        })
    }
    

    handleSaveChanges= () => {
        const { category, title, body, author} = this.state;
        const {createPost, handleEditPost, post } = this.props;
        
        post ? handleEditPost(post.id, title, body) : createPost(author, title, body, category) 
        this.props.onHandleClose()
        this.setState({
            category: this.props.post ? this.props.post.category : "",
            title: this.props.post ? this.props.post.title : "",
            body: this.props.post ? this.props.post.body : "",
            author: this.props.post ? this.props.post.author : selectAuthor(),
        })
        
    }
    render(){
        
        const {show, onHandleClose, userIcon, categories, id} = this.props;
        const { title, body, author, category} = this.state;
        console.log('categories', categories)
        return(
            <div>
                <Modal show={show} onHide={() => onHandleClose()} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>
                        {id 
                            ?<span>Edit post</span>
                            :<span>Create a new post</span>
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
                                <Form.Label as = "legend" column xs ={4}>
                                    Category: 
                                </Form.Label>
                                <Col xs = {8}>
                                    {categories.map( (categoryName) => {
                                        return (
                                            <Form.Check
                                                type="radio"
                                                label={capitalize(categoryName)}
                                                name='category'
                                                value = {categoryName}
                                                checked = { category === categoryName }
                                                key = {categoryName}
                                                onChange = {this.handleInputChange}
                                                disabled = {id ? true : false}
                                            />
                                    )} )}
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
                        disabled = {!category || !title || !body ? true: false }
                    >
                        {id ? 'Save Changes' : 'Post'}
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
function mapStateToProps({posts, comments, categories}, {id}) {
    return {
        posts,
        comments,
        categories: Object.keys(categories),
        post: id ? posts[id] : null
    }
}
export default connect(mapStateToProps, {createPost, handleEditPost})(CreateEditView);