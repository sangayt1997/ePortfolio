import React from 'react';
import { IntroBannerContainer } from "./styles/banner-container.styles";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import profileImage from "../../assets/images/dummy_profile.png";
import Button from "react-bootstrap/Button";

const BannerContainer = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Passang_Wangmo_CV.docx').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                const alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Passang_Wangmo_CV.docx';
                alink.click();
            })
        })
    }
    return (
        <IntroBannerContainer className="bg--light" id="home">
            <Row className="container justify-content-between align-items-center py-16">
                <Col lg={6} sm={12}>
                    <h2>Hello, I'm Passang Wangmo.</h2>
                    <h6 className="color--gray-600">
                        A teacher-trainee, currently pursuing Postgraduate Diploma in Education in Information Technology
                        at Samtse College of Education.
                    </h6>
                    <Button className="color--white mt-sm-34 mt-12" onClick={onButtonClick}>DOWNLOAD CV</Button>
                </Col>
                <Col lg={6} sm={12} className="d-flex justify-content-center">
                    <Image
                        src={profileImage}
                        alt="profile image"
                        width="80%"
                        height="80%"
                    />
                </Col>
            </Row>
        </IntroBannerContainer>
    );
};

export default BannerContainer;
