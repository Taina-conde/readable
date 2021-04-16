import React from 'react'
import { HiAtSymbol } from "react-icons/hi";
import {connect} from 'react-redux'
import {capitalize} from '../utils/helpers'
import {Link} from 'react-router-dom'
import { handleCategoryPosts} from  '../actions/shared'
import { IoClose } from "react-icons/io5";

class Sidebar extends React.Component {
    componentDidMount() {
        const {categoriesNames, handleCategoryPosts} = this.props;
        categoriesNames.forEach(category => {
            handleCategoryPosts(category)
        });
        
    }
    render() {
        const{categories, categoriesNames, onHandleToggleSidebar, toggleSidebar} = this.props;
        return (
            
            <div className = {toggleSidebar ? "sidebar d-flex flex-column" : 'd-none d-md-flex flex-column sidebar'}>
                <div className = 'col'>
                    <a href = '/posts' className = "d-flex align-items-center text-success text-decoration-none">
                        <HiAtSymbol size = {30} /> 
                        <span className = "brand-text">PostIt</span>
                        
                    </a>
                    <button  type= 'button' className = 'dismiss-btn d-md-none' onClick= {() => this.props.onHandleToggleSidebar()}>
                            <IoClose size = {25}/>
                    </button>
                </div>
                
                <div className = 'col sidebar-hr'><hr/></div>
                <ul className= "col nav nav-pills flex-column mb-auto">
                    <li className = 'nav-item'>
                        <Link className = 'nav-link' to = '/posts'>
                                <span>All posts</span>
                        </Link> 
                    </li>
                    {categoriesNames.map( category => (
                        <li className = 'nav-item' key = {category}>
                            <Link to = {`/${categories[category].path}/posts`} className = 'nav-link'>
                                <span>{capitalize(category)}</span>
                            </Link>   
                        </li>
                    ))}

                </ul>
                <div className = 'col'></div>
                

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