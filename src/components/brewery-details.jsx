import React from 'react';
import { Paper, Container, Box, Typography } from '@material-ui/core';

const BreweryDetails = props => {
  const brewery = props.brewery;

  return (
    <Box className="details-container">
      <Paper elevation={3} className="details-paper">
        <Box mt={3} mb={2} textAlign="center">
          <Typography variant="h3">
            {brewery.name}
          </Typography>
        </Box>
        <Box  mb={2}>
          <Typography variant="h5">Brewery Type: </Typography >
          <Typography component="subtitle1">
            {brewery.brewery_type}
          </Typography>
        </Box>
        <Box className="address-container" mb={2}>
          <Typography variant="h5">Address:</Typography >
          <Typography variant="subtitle1">{brewery.street}</Typography >
          <Typography variant="subtitle1">
            {brewery.city}, {brewery.state} {brewery.postal_code}
          </Typography>
        </Box>
        <Box className="website-container" mb={2}>
          <Typography variant="h5">Website :</Typography >
          <a className="brewery-link" href={brewery.website_url}>{brewery.website_url || 'N/A'}</a>
        </Box>
        <Box className="phone-container"mb={3}>
          <Typography variant="h5">Phone:</Typography >
          <Typography variant="subtitle1">{brewery.phone || 'N/A'}</Typography>
        </Box>
      </Paper>
    </Box>
  )
}

export default BreweryDetails;
