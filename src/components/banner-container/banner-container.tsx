import React from 'react';
import { IntroBannerContainer } from "./styles/banner-container.styles";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import profileImage from "../../assets/images/profile.png";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

const BannerContainer = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('sample.docx').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                const alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'sample.docx';
                alink.click();
            })
        });
        Swal.fire({
            title: 'Download Completed!',
            text: 'Thank you for downloading resume.',
            icon: 'success',
            showConfirmButton: false,
            timer: 2500
        })
    }
    return (
        <IntroBannerContainer className="bg--light" id="home">
            <Row className="container justify-content-between align-items-center py-16">
                <Col lg={6} sm={12} className="mb-18 mb-md-0">
                    <h2>Hello, I'm Sam.</h2>
                    <h6 className="color--gray-600">
                        I am currently pursuing PHD in Software Engineering and Information Technology
                        at Howard University.
                    </h6>
                    <Button className="color--white mt-sm-34 mt-12" onClick={onButtonClick}>DOWNLOAD CV</Button>
                </Col>
                <Col lg={6} sm={12} className="d-flex justify-content-center">
                    <Image
                        src={profileImage}
                        alt="Design by Freepik"
                        width="80%"
                        height="80%"
                    />
                </Col>
            </Row>
        </IntroBannerContainer>
    );
};

export default BannerContainer;
