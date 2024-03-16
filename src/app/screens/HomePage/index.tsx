import React from "react";
import { Box, Container, Stack } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../css/homePage.css';

// Define the Restaurant object
interface Restaurant {
  _id: number;
  mb_image: string;
  mb_nick: string;
}

// Mock data for random restaurants
const randomRestaurants: Restaurant[] = [
  {
    _id: 1,
    mb_image: '360_F_121055831_PELQCbjwuiTc6DSaguE8u6OJUjJ1VC0l.jpg',
    mb_nick: 'Restaurant 1'
  },
  {
    _id: 2,
    mb_image: 'agency_logo1.png',
    mb_nick: 'Restaurant 2'
  },
  {
    _id: 3,
    mb_image: 'how_to_apply_travel_agency_license_in_malaysia.png',
    mb_nick: 'Restaurant 3'
  },
  {
    _id: 4,
    mb_image: 'images.png',
    mb_nick: 'Restaurant 4'
  },
  {
    _id: 5,
    mb_image: 'travel-agency-logo,-travel-company-logo-design-template-a84d60de705a96c5fdb033b1acca7966_screen.jpg',
    mb_nick: 'Restaurant 5'
  },
  // Add more restaurant data as needed
];

// Mock function to handle chosen restaurant
const chosenRestaurantHandler = (restaurantId: number) => {
  // Example of handling chosen restaurant
  console.log('Chosen restaurant ID:', restaurantId);
};

// Mock server API URL
const serverApi = '/agency';



export default function HomePage() {
  return (
    <div>
      <div className="HomePageFirstSecBackground">
        <Container>
          <Stack display={'flex'} >
            <Box className="HomeFirstSecTitle_1">
              Top Agents
            </Box>
            <Box className="HomeFirstSecTitle_2">Want To Know Our Tops?</Box>
            <Box className="HomeFirstSecSlick">
              <Stack
                sx={{ width: "100%", display: 'flex', mt: '35px' }}
                flexDirection={'row'}
              >
                <Box className="prev_btn agency-prev">
                  <ArrowBackIosNewIcon
                    sx={{ fontSize: 40 }}
                    style={{ color: 'white' }}
                  />
                </Box>
                <Swiper
                  className='agency_avatars_wrapper'
                  slidesPerView={7}
                  centeredSlides={false}
                  spaceBetween={30}
                  navigation={{
                    nextEl: '.agency-next',
                    prevEl: '.agency-prev'
                  }}
                >
                  {randomRestaurants.map((ele: Restaurant) => {
                    const image_path = `${serverApi}/${ele.mb_image}`
                    return (
                      <SwiperSlide onClick={() => chosenRestaurantHandler(ele._id)}
                        style={{
                          cursor: 'pointer',
                          width: "108px",
                          height: "180px",
                        }}
                        key={ele._id}
                        className='agency_avatars'
                      >
                        <img src={image_path} />
                        <span>{ele.mb_nick}</span>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <Box
                  className='next_btn agency-next'
                  style={{ color: 'white' }}
                  sx={{ fontSize: 40 }}
                >
                  <ArrowForwardIosNewIcon />
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </div>
      <h1 style={{ marginTop: '300px' }}>hello</h1>
    </div>
  );
}