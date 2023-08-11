import React from 'react';
import { ServicesContainer } from "./styles/services.styles";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import webDevelopment from "../../assets/icons/web_development.png";
import appDevelopment from "../../assets/icons/app_development.png";
import uiUXDesigning from "../../assets/icons/ui_ux_designing.png";
import databaseDevelopment from "../../assets/icons/database_development.png";


const Services = () => {
    const cardData = [
        {
            id: 1,
            iconImage: webDevelopment,
            title: "Web Development",
            caption: 'Unlock Your Digital Potential! Discover the art of web development with me. From captivating designs to flawless functionality, I create websites that impress and perform. Let\'s turn your ideas into an unforgettable online experience.',
        },
        {
            id: 2,
            iconImage: appDevelopment,
            title: "App Development",
            caption: 'Ignite Innovation with App Development! Transforming ideas into cutting-edge mobile experiences. User-centric design, flawless functionality. Let\'s build your app that stands out!',
        },
        {
            id: 3,
            iconImage: uiUXDesigning,
            title: "UI/UX Designing",
            caption: 'Revolutionizing Design: Unleash the Power of UI/UX! Transforming visions into captivating realities. From wireframes to pixel-perfect masterpieces, let\'s create an extraordinary user experience. Elevate your brand with our design expertise!',
        },
        {
            id: 4,
            iconImage: databaseDevelopment,
            title: "Database Development",
            caption: 'Empowering Data-Driven Solutions! Harness the potential of database development. Seamless organization, lightning-fast retrieval. Let\'s build a robust foundation for your digital success!',
        }
    ]
    return (
        <ServicesContainer id="services">
            <div>
                <div className="d-flex flex-column align-items-center justify-content-center mb-24">
                    <h1 className="color--text-primary">Services</h1>
                    <h4 className="color--text-secondary">
                        The following are the services I can provide for you.
                    </h4>
                </div>
                <Row className="flex-wrap px-lg-24 p-0">
                    {
                        cardData.map((item) => (
                            <Col key={item.id} lg={4} md={6} sm={12} className="mb-24">
                                <Card className="cursor--pointer">
                                    <Card.Body>
                                        <Card.Img variant="top" src={item.iconImage} width="40px" height="40px"
                                                  className="mb-24"/>
                                        <Card.Title className="color--text-primary mb-24">{item.title}</Card.Title>
                                        <Card.Text className="color--text-secondary mb-24">
                                            {item.caption}
                                        </Card.Text>
                                        <a href="mailto:sample@gmail.com" target="_blank"
                                           rel="noreferrer">
                                            <Button variant="primary">Hire Me</Button>
                                        </a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </ServicesContainer>
    );
};

export default Services;
