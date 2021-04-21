import React from 'react';
import {
  Box,
  Container,
  ListItem,
  ListItemText,
  List,
  Paper,
  Typography
} from '@material-ui/core';

const RecipeDetails = props => {
  const recipe = props.recipe;
  const ingr1 = `${recipe.strMeasure1} ${recipe.strIngredient1}`;
  const ingr2 = `${recipe.strMeasure2} ${recipe.strIngredient2}`;
  const ingr3 = `${recipe.strMeasure3} ${recipe.strIngredient3}`;
  const ingr4 = `${recipe.strMeasure4} ${recipe.strIngredient4}`;
  const ingr5 = `${recipe.strMeasure5} ${recipe.strIngredient5}`;
  const ingr6 = `${recipe.strMeasure6} ${recipe.strIngredient6}`;
  const ingr7 = `${recipe.strMeasure7} ${recipe.strIngredient7}`;
  const ingr8 = `${recipe.strMeasure8} ${recipe.strIngredient8}`;

  const ingredients = [ingr1, ingr2, ingr3, ingr4, ingr5, ingr6, ingr7, ingr8];

  for (let i = ingredients.length - 1; i >=0; i--) {
    console.log(ingredients[i])
    if (ingredients[i] === 'null null') {
      ingredients.splice(i, 1);
    } else {
      ingredients[i] = ingredients[i].replace('null', '');
    }
  }

  const ingredientsEl = ingredients.map(ingr => {
    return (
      <ListItem>
        <ListItemText className="ingredient" key={ingr}>{ingr}</ListItemText>
      </ListItem>
    )
  })

  return (
  <Box className="details-container">
    <Paper elevation={3} className="details-paper">
      <Box mt={2} mb={2} textAlign="center">
        <Typography variant="h4">
          {recipe.strDrink}
        </Typography>
      </Box>
      <Box className="recipe-img-detail" textAlign="center">
        <img className="detail-image" src={recipe.strDrinkThumb} alt={recipe.strDrink} />
      </Box>
      <div>
        <Box mt={2}>
          <Typography variant="h5">
            Ingredients:
          </Typography>
        </Box>
        <List>
          {ingredientsEl}
        </List>
      </div>
      <Box mt={2} mb={2}>
        <Typography variant="h5">
          Directions:
        </Typography>
        <Typography variant="subtitle1">
          {recipe.strInstructions}
        </Typography>
      </Box>
    </Paper>
  </Box>

  );

}

export default RecipeDetails;
