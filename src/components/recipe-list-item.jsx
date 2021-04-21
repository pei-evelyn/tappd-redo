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

const RecipeListItem = props => {

  return (
    <Card onClick={() => props.setView('recipe-details', props.recipe)}>
      <CardActionArea>
        <CardMedia
          image={props.recipe.strDrinkThumb}
          title={props.recipe.strDrink}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.recipe.strDrink}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.recipe.strCategory}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => props.setView('recipe-details', props.recipe)}
        >
          See recipe
        </Button>
      </CardActions>
    </Card>
  );

  // return (
  //   <div className="recipe-container" onClick={() => props.setView('recipe-details', props.recipe)}>
  //     <img className="recipe-thumbnail" src={props.recipe.strDrinkThumb} alt=""/>
  //     <div className="text-container">
  //       <h3 className="">{props.recipe.strDrink}</h3>
  //       <h5>{props.recipe.strCategory}</h5>
  //     </div>
  //   </div>
  // )
}

export default RecipeListItem;
