import React from 'react';
import { Box, Button } from '@material-ui/core';


const StartingPage = props => {
  return (
    <Box
      height="100%"
      minHeight="100vh"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Box>
          <Box position="relative">
            <Box
              width="1.8rem"
              height="1.8rem"
              position="absolute"
              className="logo-img"
              top={-25}
              left={50}
            >
            </Box>
          </Box>
          <Box textAlign="center">
            <i className="logo fas fa-glass-martini-alt"></i>
            <i className="logo fas fa-beer"></i>
          </Box>
        </Box>
        <Box mb={2}>
          <Box
            component="h1"
            fontFamily="Pattaya"
            fontSize="3.2rem"
            fontWeight={500}
          >
            Tappd
          </Box>
        </Box>
        <Box mt={1}>
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
      </Box>
    </Box>
  );
}

export default StartingPage;
