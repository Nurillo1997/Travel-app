import React from 'react';
import '../css/App.css';
import { RippleBadge } from './MaterialTheme/styled';
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';

function App() {
  return (
    <Container>
      <Stack flexDirection={"column"}>
        <Box sx={{ my: 4 }}>
          <Typography variant='h4' component={'h1'} gutterBottom>
            Create React app on Typescript with Redux
          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={4}>
            <Button color='secondary' variant='contained'>
              Contained
            </Button>
          </RippleBadge>
          <br></br>

          <Button
            variant='contained'
            disableRipple
            disableElevation
            >
            hello
          </Button>

         <Paper sx={{height:'200px', width: '120px'}}>

         </Paper>

        </Box>
      </Stack>
    </Container>
  );
}

export default App;
