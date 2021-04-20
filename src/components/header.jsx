import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// const useStyles = makeStyles({
//   stickyTop: {
//     width: '100%',
//     position: 'fixed',
//     top: 0,
//   }
// })

const Header = props => {
  // const classes = useStyles();

  return (
    <Box>
      <Box display="inline">
        <ArrowBackIosIcon />
      </Box>
      <Box
        display="inline"
        fontSize={20}
        fontWeight={500}
        textAlign="center"
      >
        <Typography>
          TAPPD
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
