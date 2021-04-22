import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HomeIcon from '@material-ui/icons/Home';
import LocalBarIcon from '@material-ui/icons/LocalBar';

const useStyles = makeStyles({
  stickyBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
  },
});

const FooterNav = props => {
  const classes = useStyles();

  return (
    <BottomNavigation
      className={classes.stickyBottom}
      showLabels
    >
      <BottomNavigationAction
        label="Recipes"
        icon={<MenuBookIcon />}
        onClick={() => props.setView('search-recipes', {})}
      />
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        onClick={() => props.setView('homepage', {})}
      />
      <BottomNavigationAction
        label="Breweries"
        icon={<LocalBarIcon />}
        onClick={() => props.setView('search-breweries', {})}
      />
    </BottomNavigation>
  );
}

export default FooterNav;
