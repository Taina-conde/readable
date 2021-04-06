import React from 'react' 
import { IoChatbubblesOutline } from "react-icons/io5"
import { BiLike, BiDislike, BiEdit, BiTrash, BiDotsHorizontalRounded } from 'react-icons/bi'
import {connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {  Dropdown } from 'react-bootstrap';
import { saveVoteToPost, handleDeletePost} from '../actions/posts'
import CustomDropdownToggle from './CustomDropdownToggle'



class PostButtons extends React.Component {
    state = {
        toHome: false,
        toPostDetails: false,
        
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
    
    render() {
      
        const {post, parent}= this.props;
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
                    <div className = 'col-3 p-0'>
                        <button type = 'button' className = 'post-btn mr-1' onClick = {this.handleClickComments}>
                            <IoChatbubblesOutline className = 'text-success' size = {20} />
                        </button>
                        <span className = 'post-details '>
                            {post.commentCount}
                        </span>
                    </div>
                    <div className = 'col-3 d-flex align-items-baseline p-0'>
                        <button type = 'button' className = 'post-btn mr-1'  onClick = {() => this.handleVote('downVote')}>
                            <BiDislike className = 'text-success' size = {20} />
                        </button>
                        
                        <span className = 'post-vote'>{post.voteScore}</span>
                        
                        <button type = 'button' className = 'post-btn ml-1'  onClick = {() => this.handleVote('upVote')}>
                            <BiLike className = 'text-success ' size = {20}/>
                        </button>
                    
                    </div>
                    <div className = 'col-3 d-none d-md-inline p-0'>
                        <button type = 'button' className = 'post-btn ' onClick = {this.handleEdit}>
                            <BiEdit className = 'text-success ' size = {20} />
                        </button>
                    </div>
                    <div className = 'col-3 d-none d-md-inline p-0'>
                        <button type = 'button' className = 'post-btn '>
                            <BiTrash className = 'text-success ' size = {20} onClick = {this.handleDelete}/>
                        </button>
                    </div>
                    <div className = 'col-3  d-md-none ml-auto p-0'>
                        
                            
                            <Dropdown>
                                <Dropdown.Toggle as={CustomDropdownToggle} id="dropdown-basic" >
                                    <BiDotsHorizontalRounded className = 'text-success' size = {20}/>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/edit">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/delete">Another action</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            

                        
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
