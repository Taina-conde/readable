import React from 'react'; 
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'
import { handleCategoryPosts} from  '../actions/shared'
import { capitalize } from '../utils/helpers'
class CategoriesListView extends React.Component {
    componentDidMount() {
        const {categoriesNames} = this.props;
        categoriesNames.forEach(category => {
            this.props.handleCategoryPosts(category)
        });
        
    }
   
    
    render(){
        const {categories} = this.props
        console.log('categories list', categories)
        
        return(
            <ListGroup variant = 'flush'>
                {Object.keys(categories).map( category => {
                    console.log( 'xxxxxx', category)
                    return (
                        <ListGroup.Item key = {category}
                        
                        >
                           <Link 
                                to = {`/${categories[category].path}/posts`} 
                                
                            >
                                {capitalize(category)}
                            </Link> 
                        </ListGroup.Item>
                    )
                } )}
                
            </ListGroup>
        )
    }
}
function mapStateToProps({categories}) {
    return {
        categories,
        categoriesNames : Object.keys(categories)
    }
}
export default connect(mapStateToProps, {handleCategoryPosts})(CategoriesListView);