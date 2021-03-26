import React from 'react'; 
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'
class CategoriesListView extends React.Component {
    
    render(){
        const {categories} = this.props
        console.log('categories list', categories)
        
        return(
            <ListGroup variant = 'flush'>
                {Object.keys(categories).map( category => (
                    <ListGroup.Item key = {categories[category].name}>
                       <Link to = {`/${categories[category].path}`}>
                            {categories[category].name.charAt(0).toUpperCase() + categories[category].name.slice(1)}
                        </Link> 
                    </ListGroup.Item>
                ))}
                
            </ListGroup>
        )
    }
}
function mapStateToProps({categories}) {
    return {
        categories
    }
}
export default connect(mapStateToProps)(CategoriesListView);