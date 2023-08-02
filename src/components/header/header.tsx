import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { CustomNavBar, NavBrand, NavLink } from "./styles/header.styles";
import logo from "../../assets/images/logo.png";

const Header = () => {

    const menuData = [
        {
            path: '#home',
            name: "HOME"
        },
        {
            path: '#services',
            name: "SERVICES"
        },
        {
            path: '#about',
            name: "ABOUT"
        },
        {
            path: '#testimonial',
            name: "TESTIMONIAL"
        },
        {
            path: '#contact',
            name: "CONTACT"
        },
    ]

    return (
        <CustomNavBar sticky="top" bg="white" expand="lg" className="px-16 py-18">
            <Container fluid>
                <div className="d-flex justify-content-center align-items-center">
                    <Image src={logo} width="20px" height="20px" className="me-4"/>
                    <NavBrand href="#home" className="color--primary">Sample ePortfolio</NavBrand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            menuData.map((item) => (
                                <NavLink to={item.path} key={item.name} smooth className="mx-lg-8 my-lg-0 my-8">
                                    {item.name}
                                </NavLink>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </CustomNavBar>
    );
};

export default Header;
