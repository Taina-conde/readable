import React from 'react'
import { HiAtSymbol } from "react-icons/hi";
import {connect} from 'react-redux'
import {capitalize} from '../utils/helpers'
import { NavLink} from 'react-router-dom'
import { handleCategoryPosts} from  '../actions/shared'
import { IoClose } from "react-icons/io5";

class Sidebar extends React.Component {
    state = {
        active: ""
    }
    componentDidMount() {
        const {categoriesNames, handleCategoryPosts} = this.props;
        categoriesNames.forEach(category => {
            handleCategoryPosts(category)
        });
        
    }
    handleCategoryClick = () =>{
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const {onHandleToggleSidebar} = this.props;
        if (vw < 768) {
            onHandleToggleSidebar()
        }
    }
    render() {
        const{categories, categoriesNames, onHandleToggleSidebar, toggleSidebar} = this.props;
        
        return (
            
            <div className = {toggleSidebar ? "sidebar d-flex flex-column" : 'd-none d-md-flex flex-column sidebar'}>
                <div className = 'col'>
                    <a href = '/' className = "brand d-flex align-items-center text-success text-decoration-none">
                        <HiAtSymbol size = {30}/> 
                        <span className = "brand-text">PostIt</span>
                        
                    </a>
                    <button  type= 'button' className = 'dismiss-btn d-md-none' onClick= {() => onHandleToggleSidebar()}>
                            <IoClose size = {25}/>
                    </button>
                </div>
                
                <div className = 'col sidebar-hr'><hr/></div>
                <ul className= "col nav nav-pills flex-column mb-auto">
                    <li className = 'nav-item' onClick= {this.handleCategoryClick}>
                        <NavLink exact className = 'nav-link' to = '/' activeClassName = "category-active">
                                <span>All posts</span>
                        </NavLink> 
                    </li>
                    {categoriesNames.map( category => (
                        <li className = 'nav-item' key = {category} onClick= {this.handleCategoryClick}>
                            <NavLink exact to = {`/${categories[category].path}/posts`} className = 'nav-link' activeClassName = "category-active">
                                <span>{capitalize(category)}</span>
                            </NavLink>   
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