import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const BreweryListItem = props => {
  return (
    <Card
      className="brewery-list-item"
      variant="outlined"
      onClick={() => props.setView('brewery-details', props.breweryInfo)}
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.breweryInfo.name}
        </Typography>
        <Typography color="textSecondary">
          {props.breweryInfo.city}
        </Typography>
        <Typography variant="body2" component="p">
          {props.breweryInfo.state}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"
          onClick={() => props.setView('brewery-details', props.breweryInfo)}
        >
          See details
        </Button>
      </CardActions>
    </Card>
  );
  // return (
  //   <div className="brewery-item-container"
  //     onClick={() => props.setView('brewery-details', props.breweryInfo)}>
  //     <img src="" />
  //     <h3>{props.breweryInfo.name}</h3>
  //     <h5>{props.breweryInfo.city}</h5>
  //     <h5>{props.breweryInfo.state}</h5>
  //   </div>
  // )
}

export default BreweryListItem;
