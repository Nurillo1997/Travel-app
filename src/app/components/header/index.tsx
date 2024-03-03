import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

export default function HompePageHeader() {
  return (
    <div>
      <div>
        <Container>
          <Stack
            className="topNavCont"
            flexDirection={'row'}
          >
            <Box>
              <img src="/icons/logoBlack.png" alt="logo" />
            </Box>
            <Stack
              className="topNavCenterCont"
              flexDirection={'row'}
              justifyContent={"space-between"}
            >
              <Box>Home</Box>
              <Box>Agents</Box>
              <Box>Destinations</Box>
              <Box>Tours</Box>
              <Box>Orders</Box>
              <Box>Community</Box>
              <Box>Help</Box>
            </Stack>
            <Stack
              className="topNavRightCont"
              flexDirection={'row'}
              justifyContent={"space-between"}
            >
              <Box className="topNavRightIcons">
                <img src="/icons/search.png" alt="search icon" />
              </Box>
              <Box className="topNavRightIcons">
                <img src="/icons/cart.png" alt="" />
              </Box>
              <Box className="topNavRightIcons">
                <img src="/icons/admin.png" alt="" />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </div>
      <div className="homePageNavBackground" >
        <Container>

          <Stack
            flexDirection={'row'}
            justifyContent={"space-between"}>

            <Box className="slider">
              <img src="/icons/slider_left.png" alt="" />
            </Box>

            <Stack
              style={{alignItems:'center'}}
              flexDirection={'column'}
              justifyContent={"space-around"}
              >
              <Box className="clider_between_text_1">Travel & Adventures</Box>
              <Box className="clider_between_text_2">travel</Box>

            </Stack>

            <Box className="slider">
              <img src="/icons/slider_right.png" alt="" />
            </Box>

          </Stack>

        </Container>
      </div>

    </div>

  );
}