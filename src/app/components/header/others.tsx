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
import StyledSelector from "../../MaterialTheme/others/StyledSelector";
import { CartBadge } from "../../MaterialTheme/styled";





/****************************
 *   DESTINATION MOCKDATA   *
*****************************/



export default function HompePageHeader(props: any) {


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const main_path = window.location.pathname;
  console.log('MAIN PATH', main_path);

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

      <div className="otherPageNavBackgroundLayer">
        <div className="otherPageNavBackground" >
          <div className="otherPageNavBackgroundFade">

            {main_path === '/agents-page' ? (
              <Container>
                <Box className="otherPagesHeaderText">Our All Agencies Page</Box>
              </Container>
            ) : main_path === '/destinations-page' ? (
              <Container>
                <Box className="otherPagesHeaderText">Destinations</Box>
              </Container>
            ) : main_path === '/tours-page' ? (
              <Container>
                <Box className="otherPagesHeaderText">Tours</Box>
              </Container>
            ) : main_path === '/community-page' ? (
              <Container>
                <Box className="otherPagesHeaderText">Community</Box>
              </Container>
            ) : (
              <Container>
                <Box className="otherPagesHeaderText">Help</Box>
              </Container>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}