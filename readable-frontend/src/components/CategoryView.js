import React from 'react'; 
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Post from './Post'
class CategoryView extends React.Component {
    
    render(){
        const {category} = this.props;
        
        console.log('category aqui', category)
        
        
        return(
            <div> CATEGORY

            
            <ul className = "posts-list">
                {/*postsIds.map((id) => (
                    <li key = {id} className = 'post-list-item'>
                        <Link to = {`/${posts[id].category}/${id}`} className = 'post-list-link' >
                            <Post id = {id}/>
                        </Link>
                    </li>
                    
                ))*/}
            </ul>
            </div>
        )
    }
}
function mapStateToProps({categories}, {match}) {
    const category = match.params.category
    
    return {
        category: categories[category],
        
        
        
    }
}
export default connect(mapStateToProps)(CategoryView);