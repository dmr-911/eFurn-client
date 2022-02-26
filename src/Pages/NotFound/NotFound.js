import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <Container>
            <img className="img-fluid not-found" src="https://i.ibb.co/nfqYgst/nf-1.jpg" alt="Page not found!" />
        </Container>
    );
};

export default NotFound;