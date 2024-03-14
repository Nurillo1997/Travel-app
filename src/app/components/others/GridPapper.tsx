import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function SpacingGrid() {
  let card = [0, 1, 2, 3];


  return (
    <Grid sx={{ flexGrow: 1, width: '2000px' }} container spacing={2}>
      {card[0] === 0
        ? <Grid item xs={3}>
          <Grid container justifyContent="center" spacing={2}>
            {card.map((value) => (
              <Grid key={value} item>
                <Paper
                  sx={{
                    height: 140,
                    width: 100,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        : <Grid item xs={5}>
          <Grid container justifyContent="center" spacing={2}>
            {card.map((value) => (
              <Grid key={value} item>
                <Paper
                  sx={{
                    height: 140,
                    width: 100,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      }
    </Grid>
  );
}