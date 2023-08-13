/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <Container>
            <div className="text-center mt-4">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("MMMM, dddd D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light py-3'>
                <Button className='px-3 mx-3' variant="danger">Latest</Button>
                <Marquee className='text-black' speed={70}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>


            <Navbar collapseOnSelect expand="lg" className="" bg="white" data-bs-theme="light" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                      
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;