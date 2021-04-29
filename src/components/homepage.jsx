import React from 'react';
import { Box, Button, Container } from '@material-ui/core';

const Homepage = props => {
  return (
    <Box
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
    >
      <Box mb={3}>
        <Box
          component="h3"
          fontWeight={600}
          fontFamily="Playfair Display"
          fontSize="3.2rem"
        >
          Let's grab a drink.
        </Box>
      </Box>
      <Box textAlign="center" width="66%" maxWidth="400px">
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
