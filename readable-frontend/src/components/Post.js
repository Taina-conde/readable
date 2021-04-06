import React from 'react'; 
import {Container, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {formatDate} from '../utils/helpers'
import PostButtons from './PostButtons'

class Post extends React.Component {
    render(){
        const { post, parent} = this.props
        
        return(
            <div className = {parent === 'PostDetailsView'? 'post-box container p-': 'container'}>
                <div className = 'row'>
                    <div className = 'post-title col-md-6'>
                        {post.title}
                        
                    </div>
                    <div className = 'col-md-6 post-details d-flex align-items-center'>
                        <span className = 'col-5 p-0 post-author'>
                            {`@${post.author}`}
                        </span> 
                        <span className = 'col-1 p-0'>
                            •
                        </span>
                        <span className = 'col-6 p-0'>
                            {formatDate(post.timestamp)}
                        </span>
                        
                    </div>
                    
                </div>
                {parent === 'PostDetailsView' 
                    && (
                    <div className = 'row'>
                        <div className= 'col post-body mb-3'>
                            {post.body}
                        </div>
                    </div>
                    )
                }
                {parent !== 'HomeView'
                    && 
                        <PostButtons id = {post.id} parent = {parent}/>
                        
                }
            </div>
        )
    }
}
function mapStateToProps({posts}, {id}) {
    return {
        post: posts[id]
    }
}
export default connect(mapStateToProps)(Post);