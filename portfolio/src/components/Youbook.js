import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import MainWrapper from './Styled/mainstyle'

// import datainfo from "../data/data.json"

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
// import { useState } from "react";
// import heartImage from "./img/icon_1.png"

import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import cartImage from "./img/icon_2.png"
import styled from "styled-components";

import '../../src/lee.scss'
import Price from "./Styled/Pirce";





export default function Main(props) {
    const { bookdata } = props; // App에서 랜더링할때마다 props 전달한 거임

    // const [youbook, setyoubook] = useState([]);

    const [isHovered, setIsHovered] = useState(false);
    const [clickedItemIndex, setClickedItemIndex] = useState(null);

    useEffect(() => {

        console.log("Youbook----", bookdata && bookdata);
        // setyoubook(bookdata)

    }, [bookdata])



    return (

        <>
            <div className="container maintitle ">
                <h1>타인의책장</h1>
                <p>고객님들의 직접 작성한 리뷰를 확인해보세요.</p>
            </div>

            <MainWrapper>
                <div className="bg-white py-5 mb-5">
                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        loop={true}
                        rewind={true}
                        navigation={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        centeredSlides={true}
                        scrollbar={{ draggable: true, dragSize: 24 }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
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
                        {bookdata && bookdata.map((book, index) => (
                            <SwiperSlide className="Mainswiper border-0 px-3" key={book.id}>
                                <div className="mainteduli "
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <Link to={`/new-books/${book.id}`} className="d-block m-3 overflow-hidden" style={{ background: "#f5f5f5", borderRadius: "3rem" }}>
                                        <img
                                            src={book.src}
                                            alt={book.alt}
                                        />
                                    </Link>
                                    <div className="mainname">

                                        <div className="mainname text-align-center">
                                            <h4 style={{ fontsize: "16px" }}><strong>{book.h4}</strong></h4>
                                            <p style={{ fontSize: "14px" }}>{book.p}</p>
                                            <div style={{ fontsize: "14px" }} className="review">
                                                <p className="">김** 24.01.19</p>
                                                <strong>   <div className="rest">
                                                    5.0
                                                </div>
                                                </strong>
                                            </div>
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



