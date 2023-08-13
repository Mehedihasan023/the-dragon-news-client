/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider'
import { FaUserCircle } from 'react-icons/fa';
const Navigationbar = () => {
    const { user } = useContext(AuthContext)
    return (
        <Container>

            <Navbar collapseOnSelect expand="lg" className="" bg="white" varient="light" data-bs-theme="" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none' to='/category/0'>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav>
                            {user &&
                                <FaUserCircle style={{ fontSize: '2rem', marginTop: '3px' }}></FaUserCircle>

                            }
                            {
                                user ? <Button variant="secondary">Logout</Button> :

                                    <Link to='/login' >
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Navigationbar;