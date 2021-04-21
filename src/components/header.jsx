import React from 'react';
import { Typography, Box } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  handleBackButton() {
    let history = this.props.history;
    if (history.length > 0) {
      history = history.pop();
    }
    this.props.switchViewBack(history.name, history.params, this.props.history);
  }

  render() {
    return (
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        position="relative"
      >
        <Box
          onClick={() => this.handleBackButton()}
          position="absolute"
          left={30}
          top={18}
        >
          <ArrowBackIosIcon />
        </Box>
        <Box
          position="absolute"
          right={30}
          top={18}
          onClick={() => this.props.setView('homepage', {})}
        >
          <Box
            component="h3"
            className="heading-name"
          >
            Tappd
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Header;
