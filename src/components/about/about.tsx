import React from 'react';
import { AboutContainer } from "./styles/about.styles";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
    const techStackData = [
        {
            name: 'Angular',
            progressStatus: '60%'
        },
        {
            name: 'React',
            progressStatus: '70%'
        },
        {
            name: 'Next.js',
            progressStatus: '60%'
        },
        {
            name: 'Flutter',
            progressStatus: '60%'
        },
        {
            name: 'React-Native',
            progressStatus: '80%'
        },
        {
            name: 'Tailwind css',
            progressStatus: '85%'
        },
        {
            name: 'Bootstrap',
            progressStatus: '90%'
        },
        {
            name: 'Html 5',
            progressStatus: '90%'
        },
        {
            name: 'CSS/SCSS',
            progressStatus: '90%'
        },

    ]
    return (
        <AboutContainer className="bg--light" id="about">
            <Container fluid className="py-lg-24 px-lg-80 p-24">
                <div className="d-flex justify-content-center align-items-center">
                    <h1>About Me</h1>
                </div>
                <Row className="pt-24">
                    <Col lg={6} sm={12} className="pb-20">
                        <h3>Hello, I'm Sangay Thinley</h3>
                        <h4 className="color--gray-600 lh-base pe-12">
                            A passionate Mobile App and Web frontend Developer having an experience of building Mobile
                            and Web applications with Angular | React | Next.js | Javascript & Typescript and
                            Cross Platform Mobile Apps With Flutter and React-Native.
                        </h4>
                    </Col>
                    <Col lg={6} sm={12}>
                        <h3>Tech Stacks:</h3>
                        {
                            techStackData.map((item) => (
                                <Row key={item.name} className="d-flex justify-content-center align-items-center mb-12">
                                    <Col lg={4} sm={12}>
                                        <div className="d-flex flex-row align-items-center mb-12 mb-sm-0">
                                            <span className="material-icons-outlined me-4 color--success">task_alt</span>
                                            <h5 className="mb-0">{item.name}</h5>
                                        </div>
                                    </Col>
                                    <Col lg={8} sm={12}>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-success"
                                                 style={{width: item.progressStatus}}></div>
                                        </div>
                                    </Col>
                                </Row>
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </AboutContainer>
    );
};

export default About;
