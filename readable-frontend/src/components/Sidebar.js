import React from 'react'
import { HiAtSymbol } from "react-icons/hi";
import {connect} from 'react-redux'
import {capitalize} from '../utils/helpers'
import {Link} from 'react-router-dom'

class Sidebar extends React.Component {
    render() {
        const{categories} = this.props;
        return (
            <div className = "d-flex flex-column p-3 text-white bg-dark">
                <a href = '/posts' className = "d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <HiAtSymbol size = {40} /> 
                    <span className = "fs-4">PostIt</span>
                </a>
                <hr></hr>
                <ul className= "nav nav-pills flex-column mb-auto">
                    <li className = 'nav-item'>
                        <Link className = 'nav-link' to = '/posts'>
                                <span>All posts</span>
                        </Link> 
                    </li>
                    {Object.keys(categories).map( category => (
                        <li className = 'nav-item'>
                            <Link className = 'nav-link' to = {`/${categories[category].path}/posts`}>
                                <span>{capitalize(category.name)}</span>
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
        categories
    }
}
export default connect(mapStateToProps)(Sidebar);