import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  fullHeight: {
    height: '100%',
    minHeight: '85vh',
  }
});

const Homepage = props => {
  const classes = useStyles();

  return (
    <Box
      textAlign="center"
      className={classes.fullHeight}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box mb={2}>
        <Typography variant="h3" fontWeight={500}>
          Let's grab a drink.
        </Typography>
      </Box>
      <Box textAlign="center">
        <Box mb={2}>
          <Button
            onClick={() => props.setView('search-recipes', {})}
            variant="contained"
            color="primary"
            size="large"
          >
            Stay In
          </Button>
        </Box>
        <Box mt={2}>
          <Button
            onClick={() => props.setView('search-breweries', {})}
            variant="contained"
            color="primary"
            size="large"
          >
            Go Out
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Homepage;
