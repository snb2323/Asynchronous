import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

function BestSlide({ data }) {
    const renderContent = (content) => (
        <>
            {content.split('|').map((item, index) => (
                <React.Fragment key={index}>
                    {item}
                    <br />
                </React.Fragment>
            ))}
        </>
    );

    return (
        <Swiper className="container"
            modules={[Navigation, EffectFade, Autoplay, Pagination]}
            effect="fade"
            loop={true}
            rewind={true}
            navigation={true}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{
                clickable: true,
                type: "fraction",
                renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
            }}
        >
            {data && data.best_slide && data.best_slide.map((best_slide, i) => (
                <SwiperSlide key={`slide-${i}`} className=" bg-white  position-relative d-flex flex-column flex-md-row align-items-center justify-content-space-between">
                    <div className="sh position-relative col-md-5 ms-md-auto  flex-grow-md-0 pb-md-0 order-md-1">
                        {best_slide.h3 && renderContent(best_slide.h3)}
                        <div className="dp position-relative">{best_slide.p && renderContent(best_slide.p)}</div>
                    </div>
                    <div className="img_pc position-relative col-md-5 me-md-auto ms-2 order-md-2 px-5">
                        <img src={best_slide.src} alt={`ain_bast ${i + 1}`} />
                    </div>
                    <div id="page_ni" className="swiper-pagination ">
                        <span className="pagi swiper-pagination-bullet"></span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default BestSlide;