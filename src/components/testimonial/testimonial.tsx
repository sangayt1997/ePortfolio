import React from 'react';
import Image from "react-bootstrap/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/swiper.scss";
import { TestimonialContainer } from "./styles/testimonial.styles";
import avatar1 from "../../assets/images/avatar_1.png";
import avatar2 from "../../assets/images/avatar_2.png";
import avatar3 from "../../assets/images/avatar_3.png";
import avatar4 from "../../assets/images/avatar_4.png";
import avatar5 from "../../assets/images/avatar_5.png";
import avatar6 from "../../assets/images/avatar_6.png";

const Testimonial = () => {
    SwiperCore.use([Autoplay]);

    const testimonialData = [
        {
            avatar: avatar1,
            message: '"A remarkable student who has consistently shown a deep commitment to learning and a genuine passion for his studies"',
            name: 'Molly(Professor)'
        },
        {
            avatar: avatar2,
            message: '"He is exceptional communication skills and leadership qualities were evident throughout our time together. His knack for inspiring her classmates and fostering a positive learning environment is truly remarkable. He is charisma and dedication will undoubtedly lead her to make a significant impact in her chosen field"',
            name: 'Amy(Professor)'
        },
        {
            avatar: avatar3,
            message: '"I want to extend my gratitude to Sam for his integral role in our project\'s success. His drive, creativity, and ability to overcome challenges were instrumental. Sam\'s collaborative spirit and results-oriented approach made a significant impact. I look forward to seeing Sam\'s continued growth and contributions in his career journey."',
            name: 'Claire(CEO of ComTech)'
        },
        {
            avatar: avatar4,
            message: '"Sam\'s dynamic and adaptable nature has been crucial to our project\'s success. He thrives in ever-changing environments and contributes with remarkable flexibility."',
            name: 'Emily(Employee of Google)'
        },
        {
            avatar: avatar5,
            message: '"Sam\'s tenure at Uber has been nothing short of exceptional. His innovative thinking, strong leadership, and dedication to excellence have propelled our technology advancements. Sam\'s contributions have been instrumental in driving our success, and his commitment to growth continues to inspire us all."',
            name: 'Jorden(Uber CEO)'
        },
        {
            avatar: avatar6,
            message: '"I am immensely grateful to Sam for his integral role in my startup project. His expertise, guidance, and collaborative spirit have been instrumental in transforming my idea into a reality. Sam\'s support has been invaluable, and I wholeheartedly endorse him as a key partner for any entrepreneurial venture."',
            name: 'Katie(StartUp Project)'
        },
    ];

    return (
        <TestimonialContainer className="bg--white custom-swiper" id="testimonial">
            <div className="d-flex justify-content-center align-items-center">
                <h1 className="color--text-primary">Testimonial</h1>
            </div>
            <Swiper
                autoplay={true}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    1200: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    480: {
                        slidesPerView: 1,
                    }
                  }}
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
