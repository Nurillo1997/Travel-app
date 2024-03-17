import React from "react";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { shuffle } from 'lodash';

// react grid

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../css/homePage.css';

/****************************
 *      Agency MOCKDAT      *
*****************************/

// Define the agency object
interface Agency {
  _id: number;
  mb_image: string;
  mb_nick: string;
}

// Mock data for random restaurants
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

/****************************
 *   DESTINATION MOCKDAT    *
*****************************/

//Mock data for Destination gallery
interface Destination {
  _id: number;
  mb_image: string;
  des_name: string;
}

// Mock data for random 
const RandomDestinations: Destination[] = [
  {
    _id: 1,
    mb_image: '3-eiffel-tower-getty.jpg',
    des_name: 'agency 1'
  },
  {
    _id: 2,
    mb_image: 'destination-1-1.f32b89c3.png',
    des_name: 'agency 2'
  },
  {
    _id: 3,
    mb_image: 'destination-1-2.6b007ca8.png',
    des_name: 'agency 3'
  },
  {
    _id: 4,
    mb_image: 'destination-1-3.d37d50e6.png',
    des_name: 'agency 4'
  },
  {
    _id: 5,
    mb_image: 'destination-1-4.0ba8a85a.png',
    des_name: 'agency 5'
  },
  {
    _id: 6,
    mb_image: 'agency_logo1.png',
    des_name: 'agency 6'
  },
  {
    _id: 7,
    mb_image: 'images.png',
    des_name: 'agency 7'
  },
  // Add more restaurant data as needed
];

// Mock destination server API URL 
const destinationApi = 'http://localhost:3000/destination/';


export default function HomePage() {

  //Refs for the navigation buttons:
  const prevButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);

  // console.log(prevButtonRef.current);

  return (
    <div style={{ marginTop: '200px' }}>
      <div className="HomePageFirstSecBackground">
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
                {/* <Box className="prev_btn agency-prev" ref={prevButtonRef}>
                  <ArrowBackIosNewIcon
                    sx={{ fontSize: 40 }}
                    style={{ color: 'white' }}
                  />
                </Box> */}
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  className='agency_avatars_wrapper'
                  slidesPerView={5}
                  centeredSlides={false}
                  spaceBetween={30}
                  navigation={true}
                  onSlidePrev={() => console.log('Previous Slide')} // Optional event listener
                  onSlideNext={() => console.log('Next Slide')}  // Optional event listener
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
                {/* <Box className='next_btn agency-next' ref={nextButtonRef}
                >
                  <ArrowForwardIosNewIcon
                    sx={{ fontSize: 40 }}
                    style={{ color: 'white' }}
                  />
                </Box> */}
              </Stack>
            </Box>
          </Stack>
        </Container>
      </div>
      <Container style={{ marginTop: '40px' }}>
        <Stack display="flex" alignItems="center">
          <Box className="HomeFirstSecTitle_1">Destination List</Box>
          <Box className="HomeFirstSecTitle_2">Go to Exotic Places</Box>
          <Stack width="100%" height="650px" paddingTop={'40px'}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {
                   RandomDestinations.slice(0, 5).map((ele: Destination) => {
                    const image_path = `${destinationApi}/${ele.mb_image}`;
                    return (
                      <Grid item xs={ele._id === 1 || ele._id === 3 ? 3 : 6} key={ele._id}>
                        <Paper
                          className="DestinationPaper"
                          style={{
                            backgroundImage: `url(${image_path})`, // Use image_path instead of destinationApi.imageUrl
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minHeight: '290px',
                            // color: '#fff',
                            padding: '20px',
                            backgroundRepeat: 'no-repeat',
                          }}
                        >
                          {ele.des_name} {/* Use ele.country instead of destination.country */}
                        </Paper>
                      </Grid>
                    );
                  })
                }
              </Grid>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}