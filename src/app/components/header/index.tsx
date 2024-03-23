import { Box, Button, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StyledSelector from "../others/StyledSelector";
import GridPapper from "../others/GridPapper";
import { CartBadge, RippleBadge } from "../../MaterialTheme/styled";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";


SwiperCore.use([Autoplay, Navigation, Pagination]);

/****************************
 *   DESTINATION MOCKDATA   *
*****************************/

const headerImages = [
  {
    img: "http://localhost:3000/destination/destination2.jpeg",
  },
  {
    img: "http://localhost:3000/destination/destination2.jpeg",
  },
  {
    img: "http://localhost:3000/destination/destination2.jpeg",
  },
]


export default function HompePageHeader(props: any) {
  //for react slick
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // react datePicker
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div style={{ marginBottom: "100px" }}>
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
              <Box className="hover_line" onClick={props.setPath}>
                <NavLink to="/" activeClassName="underline">
                  Home
                </NavLink>
              </Box>
              <Box className="hover_line" onClick={props.setPath}>
                <NavLink to="/agents-page" activeClassName="underline">
                  Agents
                </NavLink>
              </Box>
              <Box className="hover_line" onClick={props.setPath}>
                <NavLink to="/destinations-page" activeClassName="underline">
                  Destinations
                </NavLink>
              </Box>
              <Box className="hover_line" onClick={props.setPath}>
                <NavLink to="/tours-page" activeClassName="underline">
                  Tours
                </NavLink>
              </Box>
              <Box className="hover_line" onClick={props.setPath}>
                <NavLink to="/orders-page" activeClassName="underline">
                  Orders
                </NavLink>
              </Box>
              <Box className="hover_line" onClick={props.setPath}>
                <NavLink to="/community-page" activeClassName="underline">
                  Community
                </NavLink>
              </Box>
              <Box className="hover_line" onClick={props.setPath}>
                <NavLink to="/help-page" activeClassName="underline">
                  Help
                </NavLink>
              </Box>
            </Stack>

            <React.Fragment>

              <Stack
                className="topNavRightCont"
                flexDirection={'row'}
                justifyContent={"space-between"}
              >
                {/* TODO: chap tomonga extand qildirish */}
                <Box className="topNavRightIcons1">
                  <form action="" className="animeSearch">
                    <input className="animeSearchInput" type="search" placeholder="Search here ..." />
                    <i className="fa fa-search"></i>
                  </form>
                  {/* <img src="/icons/search.png" alt="search icon" /> */}
                </Box>

                <Box className="topNavRightIcons">
                  <IconButton
                    aria-label="cart"
                    id="basic-button"
                    aria-controls={undefined}
                    aria-haspopup='true'
                    aria-expanded={undefined}
                  >
                    <CartBadge badgeContent={3}>
                      <img src="/icons/cart.png" />
                    </CartBadge>
                  </IconButton>
                </Box>
                <Tooltip title="Account settings">
                  <IconButton
                    className="topNavRightIcons"
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 50, height: 50, background: '#faf5ee' }}>
                      <img src="/icons/admin.png" alt="" />
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Stack>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>

            </React.Fragment>
          </Stack>
        </Container>
      </div>

      <div className="homePageNavBackgroundLayer">
        <div className="homePageNavBackground" >
          <div className="homePageNavBackgroundFade">
            <Container>
              <Stack
                flexDirection={'row'}
                justifyContent={"space-between"}>

                <Box className="slider">
                  <img src="/icons/slider_left.png" alt="" />
                </Box>

                <Stack
                  style={{ alignItems: 'center' }}
                  flexDirection={'column'}
                  justifyContent={"space-around"}
                >
                  <Box className="clider_between_text_1">Travel & Adventures</Box>
                  <Box className="clider_between_text_2">Where Would You Like To Go?</Box>

                </Stack>

                <Box className="slider">
                  <img src="/icons/slider_right.png" alt="" />
                </Box>
              </Stack>
              <Stack
                className="searchBar"
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-between'}
              >
                <Stack
                  className="searchBarInputsBlock"
                  display={'flex'}
                  flexDirection={'column'}
                >
                  <Box className='inputTitle'>Where</Box>
                  <input
                    className="searchBarInputs"
                    type="text"
                    placeholder="Enter keywords"
                    name="place"
                    id="place" />
                </Stack>
                <Divider orientation="vertical" flexItem ></Divider>
                <Stack
                  className="searchBarInputsBlock"
                  display={'flex'}
                  flexDirection={'column'}
                >
                  <Box className='inputTitle'>When</Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    {/* <input
                className="searchBarInputs"
                type="date"
                value='today'
                name="place"
                id="place" /> */}
                    <DatePicker className="searchBarInputs" selected={startDate} onChange={(date) => {
                      if (date) {
                        setStartDate(date);
                      }
                    }} />
                  </LocalizationProvider>
                </Stack>
                <Divider orientation="vertical" flexItem ></Divider>
                <Stack
                  className="searchBarInputsBlock"
                  display={'flex'}
                  flexDirection={'column'}
                >
                  <Box className='inputTitle'>Type</Box>
                  <StyledSelector />
                </Stack>

                <Button
                  variant="contained"
                  className="searchBarButton"
                  style={{ backgroundColor: '#E8604C' }}
                >
                  find now
                </Button>
              </Stack>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}