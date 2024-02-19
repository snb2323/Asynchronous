import React, { useState } from "react";
import '../../src/lee.scss'
import MainWrapper from './Styled/mainstyle'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import datainfo from "../data/data.json"
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
// import { useState } from "react";
// import heartImage from "./img/icon_1.png"
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import cartImage from "./img/icon_2.png"
import styled from "styled-components";





export default function Main() {
    const [isHovered, setIsHovered] = useState(false);
    const [clickedItemIndex, setClickedItemIndex] = useState(null);



    return (

        <>

            <div className="container maintitle">
                <h1>Best</h1>
            </div>

            <MainWrapper>
                <div>
                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        loop={true}
                        rewind={true}
                        navigation={true}
                        spaceBetween={50}
                        slidesPerView={1}
                        centeredSlides={true}
                        scrollbar={{ draggable: true, dragSize: 24 }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                // spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                // spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                // spaceBetween: 50,
                            },
                        }}
                    >
                        {datainfo.Design.map((book, index) => (
                            <SwiperSlide className="Mainswiper" key={index}>
                                <div className="mainteduli "
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <Link to={`/new-books/${index}`}>
                                        <img
                                            src={book.src}
                                            alt={book.alt}
                                        />
                                    </Link>
                                    <div className="mainname">
                                        <div>
                                            <h4><strong>{book.h4}</strong></h4>
                                            <p><strong>{book.p}</strong></p>
                                        </div>
                                        <div className="ico">
                                            <span>
                                                {clickedItemIndex === index ? (
                                                    <HeartFilled style={{ color: 'red', fontSize: '21px' }} onClick={() => setClickedItemIndex(null)} />
                                                ) : (
                                                    <HeartOutlined style={{ fontSize: '20px' }} onClick={() => setClickedItemIndex(index)} />
                                                )}
                                            </span>
                                            <span><img onClick={() => {
                                                alert("장바구니담기")
                                            }} style={{ width: "30px", height: "auto" }} src={cartImage} alt="dasda" /></span>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>

                        ))}

                    </Swiper>

                </div >


            </MainWrapper >

        </>
    );
}



