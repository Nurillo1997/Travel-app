import React from 'react';
import { Box, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';

SwiperCore.use([Autoplay, Navigation, Pagination]);

/****************************
 *   DESTINATION MOCKDATA   *
*****************************/

const reviews_list = [
  {
    img: "review_img1.jpg",
    desc: " This is due to their best service, pricing and customer support. It’s throughly refresing to such a personal touch. Duis aute irure lupsum reprehenderit.",
    author: "Abduragmon Mufid",
    type: 'USER'
  },
  {
    img: "review_img1.jpg",
    desc: "This is due to their best service, pricing and customer support. It’s throughly refresing to such a personal touch. Duis aute irure lupsum reprehenderit.",
    author: "Abduragmon Mufid",
    type: 'USER'

  },
  {
    img: "review_img1.jpg",
    desc: "This is due to their best service, pricing and customer support. It’s throughly refresing to such a personal touch. Duis aute irure lupsum reprehenderit.",
    author: "Abduragmon Mufid",
    type: 'USER'
  },
  {
    img: "review_img1.jpg",
    desc: "This is due to their best service, pricing and customer support. It’s throughly refresing to such a personal touch. Duis aute irure lupsum reprehenderit.",
    author: "Abduragmon Mufid",
    type: 'USER'
  },
  {
    img: "review_img1.jpg",
    desc: "This is due to their best service, pricing and customer support. It’s throughly refresing to such a personal touch. Duis aute irure lupsum reprehenderit.",
    author: "Abduragmon Mufid",
    type: 'USER'
  },
  {
    img: "review_img1.jpg",
    desc: "This is due to their best service, pricing and customer support. It’s throughly refresing to such a personal touch. Duis aute irure lupsum reprehenderit.",
    author: "Abduragmon Mufid",
    type: 'USER'
  },

];

// Mock destination server API URL 
const reviewsApi = 'http://localhost:3000/review/';

export default function Reviews() {
  //rating value
  const values = 4.5;
  return (
    <Container className="reviews">
      <Stack marginRight={'30px'} display={'flex'} flexDirection={'column'}>
        <Box className="HomeFirstSecTitle_1">Top Agents</Box>
        <Box className="HomeFirstSecTitle_2">Want To Know Our Tops?</Box>
        <Swiper
          className='events_info swiper-wrapper'
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={100}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.reviewsPagination',
            clickable: true,
            // dynamicBullets: true,
          }}
          modules={[Pagination]}
        >

          {reviews_list.map((value, number) => {
            const image_path = `${reviewsApi}/${value.img}`
            return (
              <SwiperSlide
                style={{
                  cursor: 'pointer',
                  width: "346px",
                  height: "669px",
                }}
              >
                <Stack>
                  <Box className='reviewsAvatars'>
                    <img src={image_path} alt="" />
                  </Box>
                  <Stack className='swiperEleBox'>
                    <Box
                      sx={{
                        // width: 200,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={values}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      />
                    </Box>
                    <Box>
                      <p className='reviewsDesc'>{value.desc}</p>
                    </Box>
                    <Box>
                      <span className='customerName'> Shirley Smith</span>
                    </Box>
                    <Box>
                      <span className='clientTitle'>CUSTOMER</span>
                    </Box>
                  </Stack>
                </Stack>
              </SwiperSlide>

            )
          })
          }
        </Swiper>
      </Stack>
      <Stack className='reviewsPaginationContainer' display={'flex'} width={"100%"} height={'20px'} alignItems={'center'}>
        <div className='reviewsPagination'></div>
      </Stack>
    </Container>
  )
}