import React from 'react'; 
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'
class CategoriesListView extends React.Component {
    
    render(){
        const {categories} = this.props
        console.log('categories list', categories)
        
        return(
            <ul>
                
                
            </ul>
        )
    }
}
function mapStateToProps({categories}) {
    return {
        categories
    }
}
export default connect(mapStateToProps)(CategoriesListView);