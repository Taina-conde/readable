import React from 'react'; 
import { Container, Navbar, Nav } from 'react-bootstrap';
function Navi() {
    return(
        <Navbar expand = 'lg' bg = 'success' variant= 'light' className = 'd-md-none'>
            <Container> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/posts">All posts</Nav.Link>
                        <Nav.Link href="/categories">Categories</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="/posts">PostIT</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
export default Navi;