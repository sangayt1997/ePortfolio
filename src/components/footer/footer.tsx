import React from 'react';
import { FooterContainer } from "./styles/footer.styles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { HashLink as Link } from "react-router-hash-link";
import {
    faLinkedin,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const linkData = [
        {
            path: "#home",
            name: "Home"
        },
        {
            path: "#about",
            name: "About"
        },
        {
            path: "#services",
            name: "Services"
        },
        {
            path: "#testimonial",
            name: "Testimonial"
        },
        {
            path: "#contact",
            name: "Contact"
        },
    ]

    return (
        <FooterContainer className="bg--footer py-24 px-16">
            <Container fluid className="px-40">
                <Col>
                    <Row>
                        <Col lg={3} sm={12}>
                            <h3 className="color--white">About</h3>
                            <p className="color--gray-400 pe-24">
                                A teacher-trainee, currently pursuing Postgraduate Diploma in Education in Information Technology
                                at Samtse College of Education.
                            </p>
                        </Col>
                        <Col lg={3} sm={12}>
                            <h3 className="color--white">Links</h3>
                            {
                                linkData.map((item) => (
                                    <Link to={item.path}
                                          key={item.name}
                                          className="color--gray-400 text-decoration--none"
                                          smooth
                                    >
                                        <div>
                                            {item.name}
                                        </div>
                                    </Link>
                                ))
                            }
                        </Col>
                        <Col lg={3} sm={12} className="services mt-12">
                            <h3 className="color--white">Services</h3>
                            <p className="color--gray-400 cursor--pointer">Private Tuition</p>
                            <p className="color--gray-400 cursor--pointer">Group/Class Tuition</p>
                            <p className="color--gray-400 cursor--pointer">Online Tuition</p>
                        </Col>
                        <Col lg={3} sm={12} className="mt-12">
                            <h3 className="color--white">Follow me</h3>
                            <a href="https://www.linkedin.com/"
                               className="social-icon__linkedin social-icon">
                                <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                            </a>
                            <a href="https://twitter.com" className="social-icon__twitter social-icon">
                                <FontAwesomeIcon icon={faTwitter} size="lg"/>
                            </a>
                        </Col>
                    </Row>
                    <Col className="d-flex justify-content-center align-items-center mt-36">
                        <p className="color--gray-400">Copyright©{(new Date().getFullYear())} All rights reserved</p>
                    </Col>
                </Col>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
