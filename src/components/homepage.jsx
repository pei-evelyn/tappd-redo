import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';

const Homepage = props => {
  return (
    <Box textAlign="center">
      <Typography variant="h2">
        Let's grab a drink.
      </Typography>
      <Box textAlign="center">
        <Box mb={1}>
          <Button
            onClick={() => props.setView('search-recipes', {})}
            variant="contained"
            color="primary"
            size="large"
          >
            Stay In
          </Button>
        </Box>
        <Box mt={1}>
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
