import React from 'react';
import { ServicesContainer } from "./styles/services.styles";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import privateTuition from "../../assets/icons/private_tuition.png";
import onlineTuition from "../../assets/icons/onlint_tuition.png";
import groupTuition from "../../assets/icons/group_tuition.png";


const Services = () => {
    const cardData = [
        {
            id: 1,
            iconImage: privateTuition,
            title: "Private Tuition",
            caption: 'Join the highest average result generating private class in the town and get free library books for a year. A-private tuition Class for your son and daughter.',
        },
        {
            id: 2,
            iconImage: groupTuition,
            title: "Group/Classroom Tuition",
            caption: 'One of the best Group or Classroom tuition is given for free tuition fee.',
        },
        {
            id: 3,
            iconImage: onlineTuition,
            title: "Online Tuition",
            caption: 'Even your Son and Daughter can opt for the online tuition.',
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
                                        <a href="mailto:passangwangmo729@gmail.com" target="_blank"
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
