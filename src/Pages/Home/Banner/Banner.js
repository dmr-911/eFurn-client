import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(()=>{
        AOS.init({duration: 3000})
    });

    return (
        <Container fluid className="banner">
            <Row>
                <Col md={6} className="left-side-banner"></Col>
                <Col md={6} className="right-side-banner my-5 text-white" data-aos="fade-left">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="line rounded me-2"></div>
                        <h4>Up to 40% off!</h4>
                    </div>
                    <h1 className="fw-bold">Winter Offer <br />Going On!</h1>
                    <button className="btn-banner">Shop Now</button>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;