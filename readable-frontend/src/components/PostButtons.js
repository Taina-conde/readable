import React from 'react' 
import {Row, Col} from 'react-bootstrap'
import { IoChatbubblesOutline } from "react-icons/io5"
import { BiLike, BiDislike, BiEdit, BiTrash } from 'react-icons/bi'
import {connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { saveVoteToPost, handleDeletePost} from '../actions/posts'



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
                    <div className = 'col-3 d-flex align-items-center'>
                        <button type = 'button' className = 'post-btn col-2 d-flex' onClick = {this.handleClickComments}>
                            <IoChatbubblesOutline className = 'text-success col-12 p-0' size = {20} />
                        </button>
                        <span className = 'post-details col-9 p-0 ml-1'>{`${post.commentCount} ${post.commentCount === 1 ? 'comment': 'comments'}`}</span>
                    </div>
                    <div className = 'col-3 d-flex align-items-center'>
                        <button type = 'button' className = 'post-btn col-2 d-flex mr-1'  onClick = {() => this.handleVote('downVote')}>
                            <BiDislike className = 'text-success col-12 p-0' size = {20} />
                        </button>
                        
                        <span className = 'post-vote'>{post.voteScore}</span>
                        
                        <button type = 'button' className = 'post-btn col-2 d-flex ml-1'  onClick = {() => this.handleVote('upVote')}>
                            <BiLike className = 'text-success col-12 p-0' size = {20}/>
                        </button>
                    
                    </div>
                    <div className = 'col-3 d-flex align-items-center'>
                        <button type = 'button' className = 'post-btn col-2 d-flex' onClick = {this.handleEdit}>
                            <BiEdit className = 'text-success col-12 p-0' size = {20} />
                        </button>
                    </div>
                    <div className = 'col-3 d-flex align-items-center'>
                        <button type = 'button' className = 'post-btn col-2 d-flex'>
                            <BiTrash className = 'text-success col-12 p-0' size = {20} onClick = {this.handleDelete}/>
                        </button>
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
