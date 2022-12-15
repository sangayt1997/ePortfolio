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
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat quis nibh quis sagittis. Aliquam mollis mi id libero efficitur consequat. Duis et leo id eros efficitur viverra. Praesent a lectus eget tellus luctus consectetur.',
        },
        {
            id: 2,
            iconImage: appDevelopment,
            title: "App Development",
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat quis nibh quis sagittis. Aliquam mollis mi id libero efficitur consequat. Duis et leo id eros efficitur viverra. Praesent a lectus eget tellus luctus consectetur.',
        },
        {
            id: 3,
            iconImage: uiUXDesigning,
            title: "UI/UX Designing",
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat quis nibh quis sagittis. Aliquam mollis mi id libero efficitur consequat. Duis et leo id eros efficitur viverra. Praesent a lectus eget tellus luctus consectetur.',
        },
        {
            id: 4,
            iconImage: databaseDevelopment,
            title: "Database Development",
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat quis nibh quis sagittis. Aliquam mollis mi id libero efficitur consequat. Duis et leo id eros efficitur viverra. Praesent a lectus eget tellus luctus consectetur.',
        }
    ]
    return (
        <ServicesContainer id="services">
            <div>
                <div className="d-flex flex-column align-items-center justify-content-center mb-24">
                    <h1>Services</h1>
                    <h4 className="color--gray-600">
                        The following are the services I can provide for you.
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
