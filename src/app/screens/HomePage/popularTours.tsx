import React, { useState } from "react";
import { Box, Container, Stack } from "@mui/material"
import { Favorite } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CallIcon from '@mui/icons-material/Call';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

import { AspectRatio, Card, CardContent, CardOverflow, CssVarsProvider, Divider, IconButton } from '@mui/joy';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import { flattenDiagnosticMessageText } from "typescript";



/****************************
 *   DESTINATION MOCKDATA   *
*****************************/

interface Destination {
    _id: number;
    mb_image: string;
    des_name: string;
    des_type: string;
}

// Mock data for random 
const RandomDestinations: Destination[] = [
    {
        _id: 1,
        mb_image: 'destination1.jpeg',
        des_name: 'Spain',
        des_type: 'Adventure'
    },
    {
        _id: 2,
        mb_image: 'destination2.jpeg',
        des_name: 'Thailand',
        des_type: 'Wild'
    },
    {
        _id: 3,
        mb_image: 'destination3.jpeg',
        des_name: 'Africa',
        des_type: 'Exotic'
    },
    {
        _id: 4,
        mb_image: 'destination4.jpeg',
        des_name: 'Australia',
        des_type: 'Enjoy'
    },
    {
        _id: 5,
        mb_image: 'destination5.jpeg',
        des_name: 'Switserland',
        des_type: 'Diving'
    },
    {
        _id: 6,
        mb_image: 'agency_logo1.png',
        des_name: 'agency 6',
        des_type: 'Adventure'
    },
    {
        _id: 7,
        mb_image: 'images.png',
        des_name: 'agency 7',
        des_type: 'Adventure'
    },
    // Add more restaurant data as needed
];

// Mock destination server API URL 
const destinationApi = 'http://localhost:3000/destination/';




export default function PopularTours() {
    return (
        <Container sx={{ overflow: 'hidden' }}>
            <Stack flexDirection={'column'} alignItems={'center'}>
                <Box className="HomeFirstSecTitle_1" marginTop='60px'>Featured Tours</Box>
                <Box className="HomeFirstSecTitle_2">Most Popular Tours</Box>
                <Stack sx={{ mt: "43px" }} flexDirection={'row'}
                >
                    {RandomDestinations.map((ele: Destination) => {
                        const image_path = `${destinationApi}/${ele.mb_image}`;
                        return (

                            <CssVarsProvider key={ele._id}>
                                <Card
                                    // onClick={() => chosenRestaurantHandler(ele._id)}
                                    variant="outlined" sx={{
                                        width: 400,
                                        mr: '35px',
                                        cursor: 'pointer',

                                    }}>
                                    <CardOverflow>
                                        <AspectRatio ratio="1.7">
                                            <img src={image_path} alt="" />
                                            <Box
                                                className="popularTourCardPrice"
                                                sx={{
                                                    position: 'absolute',
                                                    zIndex: 2,
                                                    background: '#E8604C;',
                                                    transform: 'translateY(50%)',
                                                    width: '90px',
                                                    height: '30px',
                                                    marginTop: '15px'
                                                }}>
                                                $1870
                                            </Box>

                                        </AspectRatio>
                                        <Box
                                            className="popularTourCard"
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: "flex-start",
                                                position: 'absolute',
                                                zIndex: 2,
                                                right: '2rem',
                                                marginTop: '240px',
                                                transform: 'translateY(50%)',
                                                width: '90px',
                                            }}>
                                            <img src="icons/Clock.png" alt="" />
                                            <span
                                                style={{
                                                    color: '#E8604C',
                                                    fontSize: 'DM Sans',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',

                                                }}>
                                            12days
                                        </span>
                                    </Box>

                                    <Avatar src={image_path} size="lg"
                                        sx={{
                                            position: 'absolute',
                                            zIndex: 2,
                                            bottom: 0,
                                            transform: 'translateY(50%)',
                                            width: '65px',
                                            height: '65px'
                                        }}
                                    />
                                    <IconButton
                                        aria-label="Like minimal photography"
                                        size="md"
                                        variant="solid"
                                        color="neutral"
                                        sx={{
                                            position: 'absolute',
                                            zIndex: 2,
                                            borderRadius: '50%',
                                            right: '2rem',
                                            marginTop: '15px',
                                            transform: 'translateY(50%)',
                                        }}
                                        /*DARS 39-17 parentni clicklari amalga oshirilmasin*/
                                        onClick={(e) => { e.stopPropagation() }}
                                    >

                                        <Favorite
                                        // onClick={(e) => targetLikeBest(e, ele._id)}
                                        //   style={{
                                        //     fill:
                                        //       ele?.me_liked && ele?.me_liked[0]?.my_favorite
                                        //         ? "red"
                                        //         : "white",
                                        //   }}
                                        />
                                    </IconButton>
                                </CardOverflow>
                                <CardContent sx={{ justifyContent: 'flex-end' }}>
                                    <Typography level="h1" fontSize="lg" mb={1} mt={3.8}>
                                        {ele.des_name}
                                    </Typography>
                                    <Typography
                                        startDecorator={<LocationOnRoundedIcon />}
                                        textColor="neutral.600"
                                        // mb={3}
                                        fontSize="sm"
                                    >
                                        City Tours, Urban, Shopping
                                        {/* {ele.mb_address} */}
                                    </Typography>
                                </CardContent>
                                <CardOverflow >

                                    <CardContent orientation="horizontal">
                                        <Stack
                                            width={"100%"}
                                            display={'flex'}
                                            flexDirection={'row'}
                                            justifyContent={'space-between'}
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 'md',
                                                    color: 'neutral.600',
                                                    alignItems: ' center',

                                                    display: 'flex',
                                                    '&:hover': { color: 'primary.plainColor' }
                                                }}
                                            >
                                                {/* {ele.mb_views} */}<span>100</span>
                                                <VisibilityIcon sx={{ fontSize: 20, marginLeft: '5px' }} />
                                            </Typography>
                                            <Divider orientation="vertical" />
                                            <Typography
                                                sx={{
                                                    fontWeight: "md",
                                                    color: 'neutral.600',
                                                    alignItems: ' center',
                                                    display: 'flex',
                                                    '&:hover': { color: 'danger.plainColor' }

                                                }}
                                            >
                                                <div
                                                // ref={(element) => (refs.current[ele._id] = element)}
                                                >
                                                    {/* {ele.mb_likes} */}<span>299</span>
                                                </div>
                                                <Favorite
                                                    sx={{ fontSize: 20, marginLeft: '5px' }} />
                                            </Typography>
                                        </Stack>

                                    </CardContent>
                                </CardOverflow>
                            </Card>
                            </CssVarsProvider>
                );
                    })}
            </Stack>

            {/* <Stack
                    flexDirection={'row'}
                    justifyContent={'flex-end'}
                    sx={{ width: '100%', mt: '16px' }}>
                    *DARS 39-16*
                    <Button
                        style={{ background: '#1976d2', color: '#ffff' }}
                    onClick={goRestaurantsHandler}
                    >
                        Barchasini ko'rish
                    </Button>
                </Stack> */}

        </Stack>
        </Container >
    )
}