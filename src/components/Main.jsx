import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

//icons
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { LuHeartOff } from 'react-icons/lu';

//fakedata
import { Fakefilm } from '../fakedata/Fakefilm';


export const Main = () => {
    return (
        <main>
            <div className="swiper-section-1">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={4}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}

                    breakpoints={{

                        576: {
                            slidesPerView: 1,
                        },
                        650: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },

                    }}

                >
                    {Fakefilm.map(x => (
                        <SwiperSlide key={x.id} className="slide-movie">
                            <div className="img-movie">
                                <img src={x.image} alt="" />
                            </div>
                            <div className="description-movie">
                                <div className="name-movie">{x.name}</div>
                                <div className="time-movie">{x.time}</div>
                            </div>
                            <div className="control">
                                <div className="control-inner">
                                    <div className="control-1"><AiOutlineHeart /></div>
                                    <div className="control-1 c-2"><AiFillPlayCircle /></div>
                                    <div className="control-1"><LuHeartOff /></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div className="btns-swiper">
                    <div className="swiper-button-next"><MdArrowBackIos /></div>
                    <div className="swiper-button-prev"><MdArrowForwardIos /></div>
                </div>
            </div>
        </main>
    )
}
