import React from 'react';
import Header from "../../components/header/header";
import { HomeContainer } from "./styles/home.styles";
import BannerContainer from "../../components/banner-container/banner-container";
import Footer from "../../components/footer/footer";
import Services from "../../components/services/services";
import Contact from "../../components/contact/contact";
import Testimonial from "../../components/testimonial/testimonial";
import About from "../../components/about/about";

const Home = () => {
    return (
        <div>
            <Header/>
            <HomeContainer>
                <BannerContainer/>
                <Services/>
                <About/>
                <Testimonial/>
                <Contact/>
            </HomeContainer>
            <Footer/>
        </div>
    );
};

export default Home;
