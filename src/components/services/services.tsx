import React from 'react';
import { ServicesContainer } from "./styles/services.styles";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import webDevelopment from "../../assets/icons/web_responsive_development.png";
import uxDesigning from "../../assets/icons/ux_desiging.png";
import appDevelopment from "../../assets/icons/app_development.png";


const Services = () => {
    const cardData = [
        {
            id: 1,
            iconImage: webDevelopment,
            title: "Web Development",
            caption: 'Help agencies, small businesses, and start-ups achieve high quality web application and website with exceptional user experience',
        },
        {
            id: 2,
            iconImage: appDevelopment,
            title: "App Development",
            caption: 'Building pixel perfect mobile application both in IOS and Android',
        },
        {
            id: 3,
            iconImage: uxDesigning,
            title: "UI/UX",
            caption: 'Specialist in designing web, website and mobile application as per the client\'s requirements',
        }
    ]
    return (
        <ServicesContainer id="services">
            <div>
                <div className="d-flex flex-column align-items-center justify-content-center mb-24">
                    <h1>Services</h1>
                    <h4 className="color--gray-600">
                        The services i can provide as a developer to your company or business.
                    </h4>
                </div>
                <Row className="flex-wrap px-lg-24 p-0">
                    {
                        cardData.map((item) => (
                            <Col key={item.id} lg={4} sm={12} className="mb-24">
                                <Card className="cursor--pointer">
                                    <Card.Body>
                                        <Card.Img variant="top" src={item.iconImage} width="40px" height="40px"
                                                  className="mb-24"/>
                                        <Card.Title className="mb-24">{item.title}</Card.Title>
                                        <Card.Text className="color--gray-600 mb-24">
                                            {item.caption}
                                        </Card.Text>
                                        <a href="mailto:sangaythinley1694@gmail.com" target="_blank"
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
