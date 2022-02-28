import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import { useSpring, animated } from "react-spring";

const Banner = () => {
    useEffect(()=>{
        AOS.init({duration: 3000})
    });

    const styles = useSpring({
        loop: true,
        to: [
          { opacity: 1, color: "#002147" },
          { opacity: 0.7, color: "red" },
        ],
        from: { opacity: 0.7, color: "blue" },
      });

    return (
        <Container fluid className="banner">
            <Row>
                <Col md={6} className="left-side-banner"></Col>
                <Col md={6} className="right-side-banner my-5 text-white" data-aos="fade-left">
                    <div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="line rounded me-2"></div>
                        <h4>Up to <animated.div className="d-inline" style={styles}>40%</animated.div> off!</h4>
                    </div>
                    <h1 className="fw-bold banner-title">
                    <Typewriter
                    
                    options={{
                        autoStart: true,
                        loop: true
                    }}
                    onInit={(typeWriter)=>{
                        typeWriter.typeString(`Winter Offer <br />Going On!`)
                        .pauseFor(2000)
                        .start()
                    }}
                    />
                    </h1>
                    <button className="btn-banner">Shop Now</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;