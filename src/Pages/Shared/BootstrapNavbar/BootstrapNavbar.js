import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './BootstrapNavbar.css';
import { Link } from 'react-router-dom';

const BootstrapNavbar = () => {
    // const user = <FontAwesomeIcon icon={faUser} />
    // const user = <FontAwesomeIcon icon="fa-regular fa-user" />
    const user = <i className="fa-regular fa-circle-user"></i>;
    const heart = <i className="fa-regular fa-heart"></i>;
    const cart = <i className="fa-regular fa-bag-shopping"></i>;
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand as={Link} to="/">Efurn</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="mx-auto my-2 my-lg-0"
            >
                <Nav.Link className="link" as={Link} to="/">Home</Nav.Link>
                <Nav.Link className="link" as={Link} to="/">Shop</Nav.Link>
                <Nav.Link className="link" as={Link} to="/">Blog</Nav.Link>
                <Nav.Link className="link" as={Link} to="/">About us</Nav.Link>
                <Nav.Link className="link" as={Link} to="/">Contact us</Nav.Link>
                <Nav.Link className="link" as={Link} to="/">Dashboard</Nav.Link>
            </Nav>
            <Nav                
                className="ms-auto my-2 my-lg-0 d-flex align-items-center justify-content-center"
            >
                <Nav.Link as={Link} to="login"><b className="mx-2">{user}</b></Nav.Link>
                <Nav.Link><b className="mx-2">{heart}</b></Nav.Link>
                <Nav.Link><b className="mx-2">{cart}</b></Nav.Link>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="ms-auto"
                    aria-label="Search"
                    />
                </Form>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default BootstrapNavbar;