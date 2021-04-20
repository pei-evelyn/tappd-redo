import React from 'react';
import { Typography, Box, Button, Container } from '@material-ui/core';

const Homepage = props => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1">
        Let's grab a drink.
      </Typography>
      <Box>
        <Button
          onClick={() => props.setView('search-recipes', {})}
          variant="contained"
          color="primary"
          size="medium"
        >
          Stay In
        </Button>
        <Button
          onClick={() => props.setView('search-breweries', {})}
          variant="contained"
          color="primary"
          size="medium"
        >
          Go Out
        </Button>
      </Box>
    </Container>
  );
}

export default Homepage;
