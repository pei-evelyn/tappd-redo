import React from 'react';
import { Typography, Box, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  fullHeight: {
    minHeight: '100vh',
    height: '100%',
  },
});


const StartingPage = props => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.fullHeight}
    >
      <Grid item xs={6}>
        <Box textAlign="center" mb={1}>
          <i className="logo fas fa-glass-martini-alt"></i>
          <i className="logo fas fa-beer"></i>
        </Box>
        <Box textAlign="center" mb={2}>
          <Box component="h1" className="app-name">
            Tappd
          </Box>
        </Box>
        <Box textAlign="center">
          <Button
            onClick={() => props.setView('homepage', {})}
            variant="contained"
            color="default"
            size="large"
            fullWidth
          >
            Let's Go
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default StartingPage;
