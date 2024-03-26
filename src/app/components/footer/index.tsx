import { Box, Container, Divider, Stack } from "@mui/material";

export default function Footer() {
  return (
    <div className="footer">
      <img className="footerMap" src="/homePage/footerMap.png" alt="" />
      <Container className="container">
        <Stack className="firstBlock">
          <Stack className="firstBlockFirstEle">
            <img className="footerIcon" src="/icons/footer-logo 1.png" alt="" />
            <span>Welcome to our Trip and Tour Agency. Lorem simply text amet cing elit.</span>
            <Divider></Divider>
            
          </Stack>
          <Stack className="firstBlockSecondEle">
            <Stack className="tell">
              <img src="/icons/phone.png" alt="" />
              <span>+ 92 666 999 0000</span>
            </Stack>
            <Stack className="tell">
              <img src="/icons/email.png" alt="" />
              <span> nurilloabdurazzoqov@gmail.com</span>
            </Stack>
            <Stack className="tell">
              <img src="/icons/location.png" alt="" />
              <span> 666 road, broklyn street new york</span>
            </Stack>
          </Stack>

        </Stack>

        <Stack className="secondBlock">
          <p>Company</p>
          <span>About Us</span>
          <span>Community Blog</span>
          <span>Rewards</span>
          <span>Work with Us</span>
          <span>Work with Us</span>
        </Stack>
        <Stack className="thirdBlock">
          <p>Company</p>
          <span>About Us</span>
          <span>Community Blog</span>
          <span>Rewards</span>
          <span>Work with Us</span>
          <span>Work with Us</span>
        </Stack>
        <Stack className="forthBlock">
          <p>Social Media</p>
          <Stack className="forthBlockEleBlock">
            <Box className="forthBlockEle">
              <img src="/icons/Twitter.png" alt="" />
            </Box>
            <Box className="forthBlockEle">
              <img src="/icons/Facebook.png" alt="" />
            </Box>
            <Box className="forthBlockEle">
              <img src="/icons/Pinterest P.png" alt="" />
            </Box>
            <Box className="forthBlockEle">
              <img src="/icons/Instagram.png" alt="" />
            </Box>
          </Stack>
          
        </Stack>
      </Container>
    </div>
  )
}