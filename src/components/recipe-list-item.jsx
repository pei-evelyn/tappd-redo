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

const RecipeListItem = props => {
  return (
    <Box mb={2}>
      <Card onClick={() => props.setView('recipe-details', props.recipe)}>
        <CardActionArea className="recipe-list-item">
          <CardMedia
            className="recipe-list-image"
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
    </Box>
  );
}

export default RecipeListItem;
