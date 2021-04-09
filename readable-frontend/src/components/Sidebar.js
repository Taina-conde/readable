import React from 'react'
import { HiAtSymbol } from "react-icons/hi";
import {connect} from 'react-redux'
import {capitalize} from '../utils/helpers'
import {Link} from 'react-router-dom'
import { handleCategoryPosts} from  '../actions/shared'

class Sidebar extends React.Component {
    componentDidMount() {
        const {categoriesNames, handleCategoryPosts} = this.props;
        categoriesNames.forEach(category => {
            handleCategoryPosts(category)
        });
        
    }
    render() {
        const{categories, categoriesNames} = this.props;
        return (
            
            <div className = "d-flex flex-column p-3 text-white bg-dark float-left" style = {{width: '20%'}}>
                <a href = '/posts' className = "col d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <HiAtSymbol size = {30} /> 
                    <span className = "fs-4">PostIt</span>
                </a>
                <div className = 'col sidebar-hr'><hr/></div>
                <ul className= "col nav nav-pills flex-column mb-auto">
                    <li className = 'nav-item'>
                        <Link className = 'nav-link' to = '/posts'>
                                <span>All posts</span>
                        </Link> 
                    </li>
                    {categoriesNames.map( category => (
                        <li className = 'nav-item'>
                            <Link to = {`/${categories[category].path}/posts`} className = 'nav-link'>
                                <span>{capitalize(category)}</span>
                            </Link>   
                        </li>
                    ))}

                </ul>
                

            </div>
            
        )
    }
}
function mapStateToProps({categories}) {
    return {
        categories,
        categoriesNames : Object.keys(categories)
    }
}
export default connect(mapStateToProps, {handleCategoryPosts})(Sidebar);