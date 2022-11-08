import React, { useState } from 'react';
import { ContactContainer } from "./styles/contact.styles";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { db } from "../../firebase-config";
import { addDoc, collection } from "firebase/firestore";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [message, setMessage] = useState('');
    const userCollectionRef = collection(db, "contactUs");

    const handleSubmit = () => {
        addDoc(userCollectionRef, {
            name: name,
            email: email,
            phoneNo: phoneNo,
            message: message
        }).then(() => {alert("Your Message send Successfully. Thank you for Contacting Us!!!")})
    }

    const handleChange = (value: string, control: string) => {
        if(control === "name") {
            setName(value);
        } if(control === "email") {
            setEmail(value)
        } if(control === "phoneNo") {
            setPhoneNo(value)
        } if(control === "message") {
            setMessage(value)
        }
    };

    return (
        <ContactContainer className="bg--light" id="contact">
            <Container fluid className="py-lg-24 px-lg-80 p-24">
                <div className="d-flex justify-content-center align-items-center">
                    <h1>Contact Me</h1>
                </div>
                <Row className="pt-24">
                    <Col lg={6} sm={12} className="pb-20">
                        <div className="d-flex align-items-center mb-12">
                            <div className="bg--primary icon-button">
                                <span className="material-icons icon-button__icon">location_on</span>
                            </div>
                            <p className="mb-0 ms-24 color--gray-600">Samtse District, Bhutan</p>
                        </div>
                        <div className="d-flex align-items-center mb-12">
                            <div className="bg--primary icon-button">
                                <a href="mailto:passangwangmo729@gmail.com"
                                   target="_blank"
                                   rel="noreferrer"
                                   className="d-flex justify-content-center align-items-center text-decoration--none"
                                >
                                    <span className="material-icons icon-button__icon">mail</span>
                                </a>
                            </div>
                            <p className="mb-0 ms-24 color--gray-600">passangwangmo729@gmail.com</p>
                        </div>
                        <div className="d-flex align-items-center mb-12">
                            <div className="bg--primary icon-button">
                                <a href="tel:+97577723096"
                                   className="d-flex justify-content-center align-items-center text-decoration--none"
                                >
                                    <span className="material-icons icon-button__icon">phone</span>
                                </a>
                            </div>
                            <p className="mb-0 ms-24 color--gray-600">+975 17876162</p>
                        </div>
                    </Col>
                    <Col lg={6} sm={12}>
                        <Card className="py-24 px-16">
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-12">
                                        <Form.Label>Your email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            onChange={(evt) => handleChange(evt.target.value, "email")}
                                            value={email}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-12">
                                        <Form.Label>Your name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Your name"
                                            onChange={(evt) => handleChange(evt.target.value, "name")}
                                            value={name}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-12">
                                        <Form.Label>Your phone number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Your phone number"
                                            onChange={(evt) => handleChange(evt.target.value, "phoneNo")}
                                            value={phoneNo}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Your message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            className="min-height--140"
                                            type="text"
                                            placeholder="Your message"
                                            onChange={(evt) => handleChange(evt.target.value, "message")}
                                            value={message}
                                        />
                                    </Form.Group>
                                    <div className="mt-24 d-flex justify-content-end">
                                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </ContactContainer>
    );
};

export default Contact;
