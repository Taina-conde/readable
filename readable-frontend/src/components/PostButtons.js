import React from 'react' 
import { IoChatbubblesOutline } from "react-icons/io5"
import { BiLike, BiDislike, BiEdit, BiTrash, BiDotsHorizontalRounded } from 'react-icons/bi'
import {connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {  Dropdown } from 'react-bootstrap';
import { saveVoteToPost, handleDeletePost} from '../actions/posts'
import CustomDropdownToggle from './CustomDropdownToggle'
import CreateEditView from './CreateEditView'



class PostButtons extends React.Component {
    state = {
        toHome: false,
        toPostDetails: false,
        showModal: false,
        
    }
    handleVote = (option) => {
        const {post, saveVoteToPost} = this.props
        saveVoteToPost(post.id, option)
    }
    handleDelete = () => {
        const {post, handleDeletePost, parent} = this.props
        handleDeletePost(post.id)
        if (parent !==  'HomeView') {
            this.setState({
                toHome: true
            }) 
        }
          
    }
    handleClickComments = ()=> {
        const {parent} = this.props;
        if (parent !== 'PostDetailsView') {
            this.setState({
                toPostDetails: true
            })
        }
    }
    handleEdit = () => {
        this.setState({
            showModal: true
        })
    }
    handleClose = () => {
        this.setState({
            showModal: false
        })
    }
    
    render() {
      
        const {post, parent, userIcon, id}= this.props;
        console.log('props in post buttons ', this.props)
        const { toHome, toPostDetails} = this.state
        if (toHome === true) {
            return <Redirect to = '/posts'/>
        }
        if (toPostDetails ===true) {
            return <Redirect to = {`/${post.category}/${post.id}`} />
        }
       
        return (
            <div className = 'container mt-2'>
                <div className = 'row'>
                    <div className = 'col-3 p-0 d-flex align-items-baseline pl-2'>
                        <button type = 'button' className = 'icon-btn mr-1' onClick = {this.handleClickComments}>
                            <IoChatbubblesOutline className = 'text-success' size = {20} />
                        </button>
                        <span className = 'post-details'>
                            {post.commentCount}
                        </span>
                    </div>
                    <div className = 'col-3 d-flex align-items-baseline p-0 justify-content-center'>
                        <button type = 'button' className = 'icon-btn mr-1'  onClick = {() => this.handleVote('downVote')}>
                            <BiDislike className = 'text-success' size = {20} />
                        </button>
                        
                        <span className = 'post-details'>{post.voteScore}</span>
                        
                        <button type = 'button' className = 'icon-btn ml-1'  onClick = {() => this.handleVote('upVote')}>
                            <BiLike className = 'text-success ' size = {20}/>
                        </button>
                    
                    </div>
                    <div className = 'col-3 d-none d-md-inline p-0 justify-content-center d-md-flex'>
                        <button type = 'button' className = 'icon-btn ' onClick = {this.handleEdit}>
                            <BiEdit className = 'text-success ' size = {20} />
                        </button>
                    </div>
                    <div className = 'col-3 d-none d-md-inline p-0 justify-content-center d-md-flex'>
                        <button type = 'button' className = 'icon-btn '>
                            <BiTrash className = 'text-success ' size = {20} onClick = {this.handleDelete}/>
                        </button>
                    </div>
                    <div className = 'col-3  d-md-none ml-auto p-0 justify-content-center d-flex'>
                        
                            
                            <Dropdown >
                                <Dropdown.Toggle as={CustomDropdownToggle} id="dropdown-basic" >
                                    <BiDotsHorizontalRounded className = 'text-success' size = {20}/>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/edit" onClick = {this.handleEdit}>
                                        Edit
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/delete" onClick = {this.handleDelete}>
                                        Delete
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <CreateEditView 
                                show ={this.state.showModal} 
                                onHandleClose = {this.handleClose} 
                                parent = {parent} 
                                id = {id} 
                                userIcon = {userIcon}
                            />
                            

                        
                    </div>   
                </div>
            </div>
        )
    }
}
function mapStateToProps({posts}, {id}) {
    return {
        post: posts[id]
    }
}


export default connect(mapStateToProps, {saveVoteToPost, handleDeletePost})(PostButtons);
