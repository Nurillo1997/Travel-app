import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Box, Container, Stack } from "@mui/material"
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIos'



/****************************
 *      Agency MOCKDAT      *
*****************************/

// Define the agency object
interface Agency {
    _id: number;
    mb_image: string;
    mb_nick: string;
}

// Mock data for random Agency
const randomAgencies: Agency[] = [
    {
        _id: 1,
        mb_image: '360_F_121055831_PELQCbjwuiTc6DSaguE8u6OJUjJ1VC0l.jpg',
        mb_nick: 'agency 1'
    },
    {
        _id: 2,
        mb_image: 'agency_logo1.png',
        mb_nick: 'agency 2'
    },
    {
        _id: 3,
        mb_image: 'how_to_apply_travel_agency_license_in_malaysia.png',
        mb_nick: 'agency 3'
    },
    {
        _id: 4,
        mb_image: 'images.png',
        mb_nick: 'agency 4'
    },
    {
        _id: 5,
        mb_image: 'travel-agency-logo,-travel-company-logo-design-template-a84d60de705a96c5fdb033b1acca7966_screen.jpg',
        mb_nick: 'agency 5'
    },
    {
        _id: 6,
        mb_image: 'agency_logo1.png',
        mb_nick: 'agency 6'
    },
    {
        _id: 7,
        mb_image: 'images.png',
        mb_nick: 'agency 7'
    },
    // Add more restaurant data as needed
];

// Mock function to handle chosen restaurant
const chosenAgencyHandler = (agencyId: number) => {
    // Example of handling chosen restaurant
    console.log('Chosen Agency ID:', agencyId);
};

// Mock agency server API URL 
const agencyApi = '/agency';


export default function TopAgencies() {

    return (
        <div className="HomePageFirstSecBackground" style={{ marginTop: '150px' }}>
            <Container>
                <Stack display={'flex'} >
                    <Box className="HomeFirstSecTitle_1">
                        Top Agents
                    </Box>
                    <Box className="HomeFirstSecTitle_2">Want To Know Our Tops?</Box>
                    <Box className="HomeFirstSecSlick">
                        <Stack
                            sx={{ width: "100%", display: 'flex', mt: '40px' }}
                            flexDirection={'row'}
                        >
                            <Box className="prev_btn agency-prev">
                                <ArrowBackIosNewIcon
                                    className='arrowBack'
                                    sx={{ fontSize: 50 }}
                                    style={{ color: '#FF5722' }}
                                />
                            </Box>
                            <Swiper
                                // modules={[Navigation, Pagination, Scrollbar, A11y]}
                                className='agency_avatars_wrapper'
                                slidesPerView={5}
                                centeredSlides={false}
                                spaceBetween={30}
                                navigation={{
                                    nextEl: '.agency-next',
                                    prevEl: '.agency-prev'
                                }}
                                pagination={{
                                    el: '.swiper-pagination',
                                    clickable: true,
                                }}
                            >
                                {randomAgencies.map((ele: Agency) => {
                                    const image_path = `${agencyApi}/${ele.mb_image}`
                                    return (
                                        <SwiperSlide onClick={() => chosenAgencyHandler(ele._id)}
                                            style={{
                                                cursor: 'pointer',
                                                width: "108px",
                                                height: "180px",
                                            }}
                                            key={ele._id}
                                            className='agency_avatars'
                                        >
                                            <img src={image_path} />
                                            {/* <span>{ele.mb_nick}</span> */}
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                            <Box className='next_btn agency-next'>
                                <ArrowForwardIosNewIcon
                                    sx={{ fontSize: 50 }}
                                    style={{ color: '#FF5722' }}
                                />
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </div>
    );
}

