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
                        <Navbar.Brand href="/" >
                            <HiAtSymbol size = {35} className = '' /> 
                             <span className = "brand-text">PostIT</span>
                        </Navbar.Brand>
                    )
                }
                
            </Container>
        </Navbar>
    )
}
export default Navi;