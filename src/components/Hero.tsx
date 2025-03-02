import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroImage from '../assets/img/herogirl.png';
import '../assets/styles/Hero.css'; // Importing the separated CSS file

const Hero: React.FC = () => {
    return (
        <Container fluid className="hero-section py-5">
            <Container>
                <Row className="align-items-center">
                    {/* Left Side - Text Content */}
                    <Col lg={6} className="text-center text-lg-start position-relative">
                        {/* Dots Above "Dancing" */}
                        <div className="hero-dots-above">
                            {[...Array(18)].map((_, i) => (
                                <span key={i} className="hero-dot" />
                            ))}
                        </div>

                        <h1 className="hero-title">
                            Dancing to <br />
                            make a <span className="hero-highlight">difference</span>
                            <span className="hero-period">.</span>
                        </h1>
                        <p className="hero-text">
                            We are a youth organization focused on connecting dancers to various NGOs and children, fueling dreams and passions beyond just academic growth.
                        </p>

                        <div className="hero-badges">
                            <span className="hero-badge">Classes</span>
                            <span className="hero-badge">Workshops</span>
                            <span className="hero-badge">Collaborations</span>
                        </div>

                        <Button className="hero-button">Empowering through art.</Button>
                    </Col>

                    {/* Right Side - Image with Gradient Background & Correct Inverted L-Shaped Dots */}
                    <Col lg={6} className="text-center position-relative">
                        <div className="hero-image-wrapper">
                            <img src={heroImage} alt="Dancer" className="hero-image img-fluid" />

                            {/* Proper Inverted L-Shaped Dotted Pattern */}
                            <div className="hero-dots-lshape">
                                {[...Array(36)].map((_, i) => {
                                    const row = Math.floor(i / 6);
                                    const col = i % 6;
                                    const isLShape = row >= 2 || col >= 2; // Bottom 2 rows or last 2 columns
                                    return <span key={i} className={`hero-dot ${isLShape ? 'visible' : ''}`} />;
                                })}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Hero;
