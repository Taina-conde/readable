import React from 'react'; 
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BiMenu } from "react-icons/bi"
function Navi(props) {
    return(
        <Navbar expand = 'lg' bg = 'success' variant= 'light' className = 'd-md-none'>
            <Container> 
                <div onClick = {() => props.onHandleToggleSidebar()}>
                    <BiMenu size = {40}/>
                </div>
                <Navbar.Brand href="/posts">PostIT</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
export default Navi;