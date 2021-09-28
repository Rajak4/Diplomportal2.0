import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import logo_clear from '../../img/logo_clear.png'
import logo_white from '@images/logo_white.png'
import { CourseDropdown } from './CourseDropdown'
import { Navbar, Container, NavbarBrand, Nav } from 'react-bootstrap';

export const MyNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavbarBrand href="/">
                        <img
                            alt=""
                            src={logo_white}
                            width="30"
                            height="30"
                            className="align-top"
                        />{' '}
                        Diplomportal 2.0
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <CourseDropdown />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
