import {React} from "react";

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import  { LinkContainer } from 'react-router-bootstrap';

function Header(props) {

    const { activeContainer } = props;

    return (
        <header>
            <Container>
                <Navbar bg="" expand="lg">
                    <Container>
                        <LinkContainer to='/'>
                            <Navbar.Brand href="/">
                                <img src={process.env.PUBLIC_URL + '/favicon.png'} height={27} className='logo-image' alt="Logo"></img>
                                <span style={{fontWeight: 600, color: '#136996'}}>Fake</span> <span style={{color: '#48a2f8'}}>News Detector</span>
                            </Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="hearder-navbar" />
                        <Navbar.Collapse id="hearder-navbar" className="justify-content-end">
                            <Nav>
                                <NavDropdown title="News Categories" id="nav-dropdown">
                                    <LinkContainer to='/category/sport'>
                                        <NavDropdown.Item eventKey="4.1">Sports</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/category/arts'>
                                        <NavDropdown.Item eventKey='4.2'>Arts</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/category/news'>
                                        <NavDropdown.Item eventKey='4.3'>News</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/category/Lifestyle'>
                                        <NavDropdown.Item eventKey='4.3'>Lifestyle</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/category/opinion'>
                                        <NavDropdown.Item eventKey='4.3'>Politics</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </header>
    )
};

export default Header;