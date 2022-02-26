import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './BootstrapNavbar.css';
import { Link } from 'react-router-dom';

const BootstrapNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#">Efurn</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="mx-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link class="link" as={Link} to="/">Home</Nav.Link>
                <Nav.Link class="link" as={Link} to="/">Shop</Nav.Link>
                <Nav.Link class="link" as={Link} to="/">Blog</Nav.Link>
                <Nav.Link class="link" as={Link} to="/">About us</Nav.Link>
                <Nav.Link class="link" as={Link} to="/">Contact us</Nav.Link>
                <Nav.Link class="link" as={Link} to="/">Dashboard</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default BootstrapNavbar;