import React from 'react'; 
import { Container, Navbar } from 'react-bootstrap';
import { BiMenu } from "react-icons/bi"
import { HiAtSymbol } from "react-icons/hi";
function Navi(props) {
    return(
        <Navbar expand = 'lg' bg = 'success' variant= 'light' className = 'd-md-none'>
            <Container> 
                <button type = 'button' className = 'btn' onClick = {() => props.onHandleToggleSidebar()}>
                    <BiMenu size = {35}/>
                </button> 
                {
                    props.toggleSidebar === false && (
                        <Navbar.Brand href="/"  >
                            <div className = 'd-flex align-items-center brand'>
                                <HiAtSymbol size = {35} className = 'col pr-0' /> 
                                <span className = "col  pl-0 brand-text">PostIt</span>
                            </div>
                        </Navbar.Brand>
                    )
                }
                
            </Container>
        </Navbar>
    )
}
export default Navi;