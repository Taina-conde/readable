import React from 'react'; 
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import Post from './Post';
import NewPostBtn from './NewPostBtn';
import { generateUserIcon } from '../utils/helpers'
import CreateEditView from './CreateEditView'
import PostButtons from './PostButtons';
import SortBy from './SortBy';

class HomeView extends React.Component {
    state = {
        showModal: false,
        userIcon: generateUserIcon(),
        sortBy: 'featured'
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
    handleSort = (sortBy) => {
        this.setState({
            sortBy
        })
    }

    render(){
        const {postsIds, posts, category} = this.props;
        const { showModal, userIcon, sortBy } = this.state;
        console.log('homeview category', category)
        let postsArr = postsIds.filter((id) => posts[id].deleted === false)
        if (sortBy === 'most-recent') {
            postsArr.sort((a,b) => posts[b].timestamp - posts[a].timestamp)
        } else if (sortBy === 'highest-votes') {
            postsArr.sort((a,b) => posts[b].voteScore - posts[a].voteScore)
        } else if (sortBy === 'lowest-votes') {
            postsArr.sort((a,b) => posts[a].voteScore - posts[b].voteScore)
        } else if (sortBy === 'featured') {
            postsArr.sort((a,b) => posts[b].commentCount - posts[a].commentCount)
        }
        return(
            <div>
                <NewPostBtn onHandleShow = {this.handleShow} userIcon = {userIcon}/>
                <CreateEditView show ={showModal} onHandleClose = {this.handleClose} userIcon = {userIcon}/>
                <SortBy onHandleSort = {this.handleSort} value = {sortBy}/>
                <ul className = "p-0 post-box">
                    {category === null 
                        ? 
                        postsArr.map((id, index) =>  (
                            <li key = {id} className = {index === postsArr.length - 1 ? 'last-item':'post-list-item' }>
                                <Link to = {`/${posts[id].category}/${id}`} className = 'post-list-link' >
                                    <Post id = {id} parent = 'HomeView'/>
                                    
                                </Link>
                                <PostButtons parent = 'HomeView' id = {id} userIcon = {userIcon}/>
                            </li>
                    
                        ))
                        :
                        postsArr.filter( id => posts[id].category === category).map((id, index) =>  (
                            <li key = {id} className = {index === postsArr.length - 1 ? 'last-item':'post-list-item' }>
                                <Link to = {`/${posts[id].category}/${id}`} className = 'post-list-link' >
                                    <Post id = {id} parent = 'HomeView'/>
                                    
                                </Link>
                                <PostButtons parent = 'HomeView' id = {id} userIcon = {userIcon}/>
                            </li>
                    
                        ))
                    }
                </ul>
            </div>
            
        )
    }
}
function mapStateToProps({posts}, {match}) {
    console.log('params', match.params)
    const params = match.params
    
    return {
        postsIds: Object.keys(posts),
        posts,
        category: params.category === undefined ? null : params.category

    }
}
export default connect(mapStateToProps)(HomeView);