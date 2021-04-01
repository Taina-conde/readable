import React from 'react'; 
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import Post from './Post';
import NewPostBtn from './NewPostBtn';
import { generateUserIcon } from '../utils/helpers'
import CreateEditView from './CreateEditView'
import PostButtons from './PostButtons';

class HomeView extends React.Component {
    state = {
        showModal: false,
        userIcon: generateUserIcon()
    }
    handleShow = () => {
        this.setState({
            showModal: true,
        })
    }
    handleClose = () => {
        this.setState({
            showModal: false
        })
    }

    render(){
        const {postsIds, posts} = this.props;
        console.log('homeview posts', posts)
        return(
            <div>
                <NewPostBtn onHandleShow = {this.handleShow} userIcon = {this.state.userIcon}/>
                <CreateEditView show ={this.state.showModal} onHandleClose = {this.handleClose} parent = {'HomeView'} userIcon = {this.state.userIcon}/>

                <ul className = "posts-list">
                    {postsIds.map((id) => (
                        <li key = {id} className = 'post-list-item'>
                            <Link to = {`/${posts[id].category}/${id}`} className = 'post-list-link'  >
                                <Post id = {id} parent = 'HomeView'/>
                            </Link>
                            <PostButtons parent = 'HomeView' id = {id}/>
                        </li>
                        
                    ))}
                </ul>
            </div>
            
        )
    }
}
function mapStateToProps({posts}) {
    return {
        postsIds: Object.keys(posts),
        posts
    }
}
export default connect(mapStateToProps)(HomeView);