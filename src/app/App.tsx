import React from 'react';
import '../css/App.css';
import { Box, Container, Stack, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth='sm'>
      <Stack flexDirection={"column"}>
        <Box sx={{ my: 4 }}>
          <Typography variant='h4' component={'h1'} gutterBottom>
            Create React app on Typescript with Redux
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
