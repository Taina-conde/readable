import React from 'react'; 
import {connect} from 'react-redux'
import {formatDate, capitalize} from '../utils/helpers'
import PostButtons from './PostButtons'

class Post extends React.Component {
    render(){
        const { post, parent} = this.props
        
        return(
            <div className = {parent === 'PostDetailsView'? 'post-box container': 'container'}>
                <div className = 'row'>
                    <div className = 'post-title col-12 col-md-6'>
                        {post.title}
                        
                    </div>
                    <div className = 'col-12 col-md-6 post-details d-flex flex-wrap flex-sm-nowrap'>
                        <span className = 'col-6 order-1 order-sm-0 col-sm-3 p-0'>
                            {`${post.author}`}
                        </span> 
                        <span className = 'col-sm-1 order-sm-1  d-none d-sm-inline'>
                            •
                        </span>
                        <span className = 'col-6 order-3 order-sm-2 col-sm-4 p-0'>
                            {formatDate(post.timestamp)}
                        </span>
                        <span className = 'col-sm-1 order-sm-3 d-none d-sm-inline'>
                            •
                        </span>
                        <span className = 'col-6 order-2 order-sm-4 col-sm-3 p-0 post-category'>
                            <span >{capitalize(post.category)}</span>
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