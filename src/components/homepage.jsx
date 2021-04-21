import React from 'react';
import { Typography, Box, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  fullHeight: {
    height: '100%',
    minHeight: '85vh',
    width: '100%',
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
      <Box mb={3}>
        <Container maxWidth="md">
          <Box
            component="h3"
            fontWeight={500}
            className="homepage-title"
          >
            Let's grab a drink.
          </Box>
        </Container>
      </Box>
      <Box textAlign="center" width="66%">
        <Box mb={2}>
          <Button
            onClick={() => props.setView('search-recipes', {})}
            variant="contained"
            color="default"
            size="large"
            fullWidth
          >
            Stay In
          </Button>
        </Box>
        <Box mt={2}>
          <Button
            onClick={() => props.setView('search-breweries', {})}
            variant="contained"
            color="default"
            size="large"
            fullWidth
          >
            Go Out
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Homepage;
