import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Box, Container, Stack } from "@mui/material";

SwiperCore.use([Autoplay, Navigation, Pagination]);
/****************************
 *   DESTINATION MOCKDATA   *
*****************************/

const events_list = [
    {
        title: "Boyin Foodga marhamt",
        desc: "Yangicha Uslubda Yangicha Tam va Yangicha his",
        author: "Abduragmon Mufid",
        date: "20/09/01",
        location: "Tashkent, nurafshon ko'cha",
        img: "destination2.jpeg",
    },
    {
        title: "Boyin Foodga marhamt",
        desc: "Yangicha Uslubda Yangicha Tam va Yangicha his",
        author: "Abduragmon Mufid",
        date: "20/09/01",
        location: "Tashkent, nurafshon ko'cha",
        img: "destination4.jpeg",
    },
    {
        title: "Boyin Foodga marhamt",
        desc: "Yangicha Uslubda Yangicha Tam va Yangicha his",
        author: "Abduragmon Mufid",
        date: "20/09/01",
        location: "Tashkent, nurafshon ko'cha",
        img: "destination1.jpeg",
    },
    {
        title: "Boyin Foodga marhamt",
        desc: "Yangicha Uslubda Yangicha Tam va Yangicha his",
        author: "Abduragmon Mufid",
        date: "20/09/01",
        location: "Tashkent, nurafshon ko'cha",
        img: "destination5.jpeg",
    },
];

// Mock destination server API URL 
const destinationApi = 'http://localhost:3000/destination/';

export default function Reviews() {
    return (
        <div style={{ height: '800px', marginTop: '90px' }}>
            {/* swiper */}
            <Container sx={{ overflow: 'hidden' }}>
                <Stack className='events_main'>
                    <Box className='events_text'>
                        <Box className="HomeFirstSecTitle_1">Destination List</Box>
                        <Box className="HomeFirstSecTitle_2">Go to Exotic Places</Box>
                    </Box>

                    <Swiper
                        className='events_info swiper-wrapper'
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        spaceBetween={30}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            el: '.swiper_pagination',
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                        }}
                    >
                        {events_list.map((value, number) => {
                            return (
                                <SwiperSlide className='events_info_frame'>
                                    <div className='events_img'>
                                        <img className='events_img' src={`${destinationApi}` + value.img} />
                                    </div>
                                    <Box className='events_desc'>
                                        <Box className='events_bott'>
                                            <Box className='bott_left'>
                                                <div className='event_title_speaker'>
                                                    <strong>{value.title}</strong>
                                                    <div className='event_organizator'>
                                                        <img
                                                            src="/icons/speaker.svg"
                                                            style={{ width: '20px', marginRight: '10px' }}
                                                        />
                                                        <p className='spec_text_author'>{value.author}</p>
                                                    </div>
                                                </div>
                                                <p
                                                    className='text_desc'
                                                    style={{ marginTop: '10px' }}
                                                >
                                                    {' '}
                                                    {value.desc} {' '}
                                                </p>
                                                <div
                                                    className='bott_info'
                                                    style={{ marginTop: '10px' }}
                                                >
                                                    <div className='bott_info_main'>
                                                        <img
                                                            src="/icons/calendar.svg"
                                                            style={{ marginRight: '10px' }}
                                                        />
                                                        {value.date}
                                                    </div>
                                                    <div className='bott_info_main'>
                                                        <img
                                                            src="/icons/location.svg"
                                                            style={{ marginRight: '10px' }}
                                                        />
                                                        {value.location}
                                                    </div>
                                                </div>
                                            </Box>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <Container className='prev_next_container'>
                        <Box className='prev_next_frame' width={'100%'}>
                            <img
                                // style={{marginTop:'1000px'}}
                                src="/icons/arrow-right.svg"
                                className='swiper-button-prev'
                                alt="" />
                            <div className='dot_frame_pagination swiper_pagination'></div>
                            <img
                                src={"/icons/arrow-left.svg"}
                                className='swiper-button-next'
                                alt="" />
                        </Box>
                    </Container>
                </Stack>
            </Container>
        </div>
    );
}

