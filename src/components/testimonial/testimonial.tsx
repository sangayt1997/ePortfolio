import React from 'react';
import Image from "react-bootstrap/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/swiper.scss";
import avatar1 from "../../assets/images/avatar_1.png";
import avatar2 from "../../assets/images/avatar_2.png";

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
            avatar: avatar1,
            message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat quis nibh quis sagittis. Aliquam mollis mi id libero efficitur consequat. Duis et leo id eros efficitur viverra. Praesent a lectus eget tellus luctus consectetur."',
            name: 'Claire(CEO of ComTech)'
        },
        {
            avatar: avatar2,
            message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat quis nibh quis sagittis. Aliquam mollis mi id libero efficitur consequat. Duis et leo id eros efficitur viverra. Praesent a lectus eget tellus luctus consectetur."',
            name: 'Emily(Employee of Google)'
        },
        {
            avatar: avatar1,
            message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat quis nibh quis sagittis. Aliquam mollis mi id libero efficitur consequat. Duis et leo id eros efficitur viverra. Praesent a lectus eget tellus luctus consectetur."',
            name: 'Jorden(College mate)'
        },
        {
            avatar: avatar1,
            message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat quis nibh quis sagittis. Aliquam mollis mi id libero efficitur consequat. Duis et leo id eros efficitur viverra. Praesent a lectus eget tellus luctus consectetur."',
            name: 'Katie(Professor)'
        },
        {
            avatar: avatar2,
            message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat quis nibh quis sagittis. Aliquam mollis mi id libero efficitur consequat. Duis et leo id eros efficitur viverra. Praesent a lectus eget tellus luctus consectetur."',
            name: 'Jenna(CTO of ComTech)'
        },
        {
            avatar: avatar2,
            message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat quis nibh quis sagittis. Aliquam mollis mi id libero efficitur consequat. Duis et leo id eros efficitur viverra. Praesent a lectus eget tellus luctus consectetur."',
            name: 'Katherine(Entrepreneur)'
        },
    ];

    return (
        <div className="bg--white custom-swiper" id="testimonial">
            <div className="d-flex justify-content-center align-items-center">
                <h1>Testimonial</h1>
            </div>
            <Swiper
                slidesPerView={3}
                autoplay={true}
                navigation={true} modules={[Navigation]}
            >
                {
                    testimonialData.map((item,index) => (
                        <SwiperSlide key={index}>
                            <div className="d-flex flex-column justify-content-center align-items-center px-5">
                                <div className="bg--gray-400 border-radius--full size-100 d-flex justify-content-center align-items-center">
                                    <Image src={item.avatar} width="60px" height="60px" />
                                </div>
                                <p className="mt-12">{item.name}</p>
                                <p className="fs--14 color--gray-600 m-auto">{item.message}</p>
                            </div>
                        </SwiperSlide>
                        )
                    )
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;
