import React, { useState } from "react";
import { Box, Container, Grid, Paper, Stack } from "@mui/material"

/****************************
 *   DESTINATION MOCKDAT    *
*****************************/

//Mock data for Destination gallery
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

export default function RecommendedDestinations() {

    //hover Destination 
    const [hoveredMap, setHoveredMap] = useState<Record<number, boolean>>({});

    const handleMouseEnter = (id: number) => {
        setHoveredMap(prevMap => ({
            ...prevMap,
            [id]: true
        }));
    };

    const handleMouseLeave = (id: number) => {
        setHoveredMap(prevMap => ({
            ...prevMap,
            [id]: false
        }));
    };

    return (
        <div>
            <Container>
                <Box className="HomeFirstSecTitle_1">Destination List</Box>
                <Box className="HomeFirstSecTitle_2">Go to Exotic Places</Box>
                <Stack width="100%" height="650px" paddingTop={'40px'}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {RandomDestinations.slice(0, 5).map(ele => (
                                <Grid item xs={ele._id === 1 || ele._id === 3 ? 3 : 6} key={ele._id}>
                                    <Paper
                                        className="DestinationPaper"
                                        style={{
                                            position: 'relative',
                                            backgroundImage: `linear-gradient(${hoveredMap[ele._id] ? 'rgba(0, 0, 0, 0.6)' : 'rgba(46, 46, 46, 0.398)'}, ${hoveredMap[ele._id] ? 'rgba(0, 0, 0, 0.6)' : 'rgba(46, 46, 46, 0.398)'}), url(${destinationApi}/${ele.mb_image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            minHeight: '290px',
                                            padding: '20px',
                                            backgroundRepeat: 'no-repeat',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={() => handleMouseEnter(ele._id)}
                                        onMouseLeave={() => handleMouseLeave(ele._id)}
                                    >
                                        <Stack className="destinationEleBox">
                                            <Box
                                                className="RedButton"
                                                style={{
                                                    visibility: hoveredMap[ele._id] ? 'visible' : 'hidden'
                                                }}
                                            >
                                                <Box className="RedButtonEle">6 Tours</Box>
                                            </Box>
                                            <Box className="destinationType">{ele.des_type}</Box>
                                            <Box className="destinationName">{ele.des_name}</Box>
                                        </Stack>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </div>
    )
}