import React from 'react';
import Image from "react-bootstrap/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/swiper.scss";
import avatar1 from "../../assets/images/avatar_1.png";
import avatar2 from "../../assets/images/avatar_2.png";
import avatar3 from "../../assets/images/avatar_3.png";
import avatar4 from "../../assets/images/avatar_4.png";
import avatar5 from "../../assets/images/avatar_5.png";
import avatar6 from "../../assets/images/avatar_6.png";
import { TestimonialContainer } from "./styles/testimonial.styles";

const Testimonial = () => {
    SwiperCore.use([Autoplay]);

    const testimonialData = [
        {
            avatar: avatar1,
            message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat quis nibh quis sagittis. Aliquam mollis mi id libero efficitur consequat. Duis et leo id eros efficitur viverra. Praesent a lectus eget tellus luctus consectetur."',
            name: 'Molly(Friend)'
        },
        {
            avatar: avatar2,
            message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat quis nibh quis sagittis. Aliquam mollis mi id libero efficitur consequat. Duis et leo id eros efficitur viverra. Praesent a lectus eget tellus luctus consectetur."',
            name: 'Amy(Professor)'
        },
        {
            avatar: avatar3,
            message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat quis nibh quis sagittis. Aliquam mollis mi id libero efficitur consequat. Duis et leo id eros efficitur viverra. Praesent a lectus eget tellus luctus consectetur."',
            name: 'Claire(CEO of ComTech)'
        },
        {
            avatar: avatar4,
            message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat quis nibh quis sagittis. Aliquam mollis mi id libero efficitur consequat. Duis et leo id eros efficitur viverra. Praesent a lectus eget tellus luctus consectetur."',
            name: 'Emily(Employee of Google)'
        },
        {
            avatar: avatar5,
            message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat quis nibh quis sagittis. Aliquam mollis mi id libero efficitur consequat. Duis et leo id eros efficitur viverra. Praesent a lectus eget tellus luctus consectetur."',
            name: 'Jorden(College mate)'
        },
        {
            avatar: avatar6,
            message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat quis nibh quis sagittis. Aliquam mollis mi id libero efficitur consequat. Duis et leo id eros efficitur viverra. Praesent a lectus eget tellus luctus consectetur."',
            name: 'Katie(Professor)'
        },
    ];

    return (
        <TestimonialContainer className="bg--white custom-swiper" id="testimonial">
            <div className="d-flex justify-content-center align-items-center">
                <h1>Testimonial</h1>
            </div>
            <Swiper
                slidesPerView={3}
                autoplay={true}
                navigation={true}
                modules={[Navigation]}
            >
                {
                    testimonialData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="d-flex flex-column justify-content-center align-items-center px-5 testimonial-card">
                                    <Image src={item.avatar} width="70px" height="70px"
                                           className="border-radius--full shadow-sm" alt="testmonial avatar"/>
                                    <p className="mt-12">{item.name}</p>
                                    <p className="fs--14 color--gray-600">{item.message}</p>
                                </div>
                            </SwiperSlide>
                        )
                    )
                }
            </Swiper>
        </TestimonialContainer>
    );
};

export default Testimonial;
