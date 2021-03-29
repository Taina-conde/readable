import React from 'react'; 
class CategoryView extends React.Component {
    render(){
        const {postsIds, posts} = this.props;
        console.log('homeview posts', posts)
        return(
            <div> CATEGORY

            
            <ul className = "posts-list">
                {postsIds.map((id) => (
                    <li key = {id} className = 'post-list-item'>
                        <Link to = {`/${posts[id].category}/${id}`} className = 'post-list-link' >
                            <Post id = {id}/>
                        </Link>
                    </li>
                    
                ))}
            </ul>
            </div>
        )
    }
}
export default CategoryView;