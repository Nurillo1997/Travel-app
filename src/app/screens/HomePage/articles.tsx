import { Box, Button, Container, Stack } from "@mui/material";

export default function Articles() {
  return (
    <div className="article">
      <Container>

        <span className="HomeFirstSecTitle_1">From the blog post</span>
        <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <span className="HomeFirstSecTitle_2">News & Articles</span>
          <Button
            className="articlesRedButton"
            variant="contained"
            style={{ backgroundColor: '#E8604C' }}
          >
            view all posts
          </Button>
        </Stack>

        <Stack className="articleContainerLayout">
          <Box className='articleContainer'>
            <Box className="articleImg">
              <Box className='date'>
                <span>28</span>
                <span>aug</span>
              </Box>
            </Box>

            <Stack className="articleOneData">
              <Box>
                <img className="icon" src="/icons/articleUser.png" alt="" />
                <span className="span">Admin</span>
              </Box>
              <Box className='articleAdmin'>
                <img className="icon" src="/icons/Messaging.png" alt="" />
                <span className="span">2 Comments</span>
              </Box>
            </Stack>
            <span className="articleDesc">Things to See and Do When You visit Japan</span>
          </Box>
          <Box className='articleContainer'>
            <Box className="articleImg">
              <Box className='date'>
                <span>28</span>
                <span>aug</span>
              </Box>
            </Box>

            <Stack className="articleOneData">
              <Box>
                <img className="icon" src="/icons/articleUser.png" alt="" />
                <span className="span">Admin</span>
              </Box>
              <Box className='articleAdmin'>
                <img className="icon" src="/icons/Messaging.png" alt="" />
                <span className="span">2 Comments</span>
              </Box>
            </Stack>
            <span className="articleDesc">Things to See and Do When You visit Japan</span>
          </Box>
          <Box className='articleContainer'>
            <Box className="articleImg">
              <Box className='date'>
                <span>28</span>
                <span>aug</span>
              </Box>
            </Box>

            <Stack className="articleOneData">
              <Box>
                <img className="icon" src="/icons/articleUser.png" alt="" />
                <span className="span">Admin</span>
              </Box>
              <Box className='articleAdmin'>
                <img className="icon" src="/icons/Messaging.png" alt="" />
                <span className="span">2 Comments</span>
              </Box>
            </Stack>
            <span className="articleDesc">Things to See and Do When You visit Japan</span>
          </Box>
        </Stack>
      </Container>
    </div>
  )
}