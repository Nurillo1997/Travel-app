import { Box, Container, Stack } from "@mui/material";
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
              <Box className="topNavRightIcons">1</Box>
              <Box className="topNavRightIcons">2</Box>
              <Box className="topNavRightIcons">3</Box>
            </Stack>
          </Stack>
        </Container>
      </div>
      <div className="homePageNavBackground" >
        <div className="label">
          <div className="travel-adventures">Travel &amp; Adventures</div>
        </div>
      </div>

    </div>

  );
}