import { Box, Stack } from "@mui/material";


export default function BenefitsSection(){
  return(
    <div className="whyChoose">
      <Stack className='whyChooseContainer'>
        <Box className="whyChooseLeft">
          <Box className='whyChooseBg'></Box>
          <Box className='whyChooseToggle'>
            <p>
            <span> Trips</span>
            <br />
            <span> & tours</span>
            </p>
          </Box>
        </Box>
        <Box className="whyChooseRight">
          <Box className="whyChooseRightMap"></Box>
          <Box className="whyChooseRightContent">
            <Box className="sectionTittle">
              <span className="sectionTitleTagline">Our benefit lists</span>
              <h1 className="sectionTitleTittle">Why Choose Tevily</h1>
              <p className="whyChooseRightText">
              There are many variations of passages of Lorem Ipsum is simply free text available in the market for you, but the majority have suffered alteration in some form.
              </p>
              <ul className="whyChooseList">
                <li>
                  <div className="icon">
                    <span className="iconTravel"></span>
                  </div>
                  <div className="text">
                    <h4>Professional and Certified</h4>
                    <p>Lorem ipsum is simply free text dolor sit but the majority have suffered amet, consectetur notted.</p>
                  </div>
                </li>
                <li>
                <div className="icon">
                    <span className="iconMap"></span>
                  </div>
                  <div className="text">
                    <h4>Get Instant Tour Bookings</h4>
                    <p>Lorem ipsum is simply free text dolor sit but the majority have suffered amet, consectetur notted.</p>
                  </div>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Stack>
    </div>
  )
}