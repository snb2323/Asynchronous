import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';



function Best_slide(props) {
    return (

        <Swiper
            modules={[Navigation, EffectFade, Autoplay, Pagination]} effect="fade"
            loop={true}
            rewind={true}
            navigation={true}



            // autoplay={{
            //     delay: 2500,
            // }}

            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}


            pagination={{

                clickable: true,
                type: "fraction",
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            }
            }
        >

            {
                props.data && props.data.best_slide && props.data.best_slide.map((best_slide, i) => (

                    <SwiperSlide key={`slide-${i}`} className='px-5 container Bestsw bg-white position-relative d-flex flex-column flex-md-row align-items-center justify-content-center  '>
                        <div className='img_pc position-relative col-md-5 me-md-auto ms-2 order-md-2 px-5'>
                            <img src={best_slide.src} alt={`ain_bast ${i + 1}`} >
                            </img>
                        </div>

                        <div className='sh position-relative col-md-5 ms-md-auto  flex-grow-1 flex-grow-md-0  pb-md-0 order-md-1' key={`sh-${i}`}>
                            {best_slide.h3 && best_slide.h3.split('|').map((v, j) => (


                                <React.Fragment key={`h3-${j}`}>
                                    {v}
                                    <br />
                                </React.Fragment>
                            ))}

                            <div className='dp position-relative' key={`dp-${i}`}>
                                {best_slide.p && best_slide.p.split('|').map((v, k) => (
                                    <React.Fragment key={`p-${k}`}>
                                        {v}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </div>
                            <div id="page_ni" className='swiper-pagination '>
                                <span className='pagi swiper-pagination-bullet'></span>
                            </div>
                        </div>

                    </SwiperSlide>

                ))
            }
        </ Swiper >
    )
}
export default Best_slide