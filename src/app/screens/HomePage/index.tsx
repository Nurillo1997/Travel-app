import React from "react";
import { Box, Container, Stack } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../css/homePage.css';


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
  // Add more restaurant data as needed
];

// Mock function to handle chosen restaurant
const chosenAgencyHandler = (agencyId: number) => {
  // Example of handling chosen restaurant
  console.log('Chosen Agency ID:', agencyId);
};

// Mock server API URL
const serverApi = '/agency';





export default function HomePage() {

  //Refs for the navigation buttons:
  const prevButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);

  // console.log(prevButtonRef.current);

  return (
    <div style={{ marginTop: '150px' }}>
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
                {/* <Box className="prev_btn agency-prev" ref={prevButtonRef}>
                  <ArrowBackIosNewIcon
                    sx={{ fontSize: 40 }}
                    style={{ color: 'white' }}
                  />
                </Box> */}
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  className='agency_avatars_wrapper'
                  slidesPerView={3}
                  centeredSlides={false}
                  spaceBetween={30}
                  navigation={true}
                  onSlidePrev={() => console.log('Previous Slide')} // Optional event listener
                  onSlideNext={() => console.log('Next Slide')}  // Optional event listener
                >
                  {randomAgencies.map((ele: Agency) => {
                    const image_path = `${serverApi}/${ele.mb_image}`
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
                        <span>{ele.mb_nick}</span>
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
      <h1 style={{ marginTop: '300px' }}>hello</h1>
    </div>
  );
}