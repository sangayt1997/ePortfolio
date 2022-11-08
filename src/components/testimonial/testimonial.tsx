import React from 'react';
import Image from "react-bootstrap/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/swiper.scss";
import avatar1 from "../../assets/images/avatar_1.png";
import avatar2 from "../../assets/images/avatar_2.png";

const Testimonial = () => {
    const testimonialData = [
        {
            avatar: avatar1,
            message: 'Thank you so much madam'
        },
        {
            avatar: avatar2,
            message: 'Thank you so much madam'
        },
        {
            avatar: avatar1,
            message: 'Thank you so much madam'
        },
        {
            avatar: avatar2,
            message: 'Thank you so much madam'
        },
        {
            avatar: avatar1,
            message: 'Thank you so much madam'
        },
        {
            avatar: avatar1,
            message: 'Thank you so much madam'
        },
        {
            avatar: avatar2,
            message: 'Thank you so much madam'
        },
        {
            avatar: avatar2,
            message: 'Thank you so much madam'
        },
    ];

    return (
        <div className="bg--white custom-swiper" id="testimonial">
            <Swiper
                slidesPerView={3}
                navigation={true} modules={[Navigation]}
            >
                {
                    testimonialData.map((item,index) => (
                        <SwiperSlide key={index}>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="bg--gray-400 border-radius--full size-100 d-flex justify-content-center align-items-center">
                                    <Image src={item.avatar} width="80px" height="80px" />
                                </div>
                                <p className="mt-12">{item.message}</p>
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
