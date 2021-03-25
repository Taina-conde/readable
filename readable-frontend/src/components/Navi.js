import React from 'react'; 
import { Container, Navbar, Nav } from 'react-bootstrap';
function Navi() {
    return(
        <Navbar expand = 'lg' bg = 'success' variant= 'light'>
            <Container>
                <Navbar.Brand href="#home">PostIT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">All posts</Nav.Link>
                        <Nav.Link href="#udacity">Udacity</Nav.Link>
                        <Nav.Link href="#react">React</Nav.Link>
                        <Nav.Link href="#redux">Redux</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navi;