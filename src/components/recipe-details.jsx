import React from 'react';

const RecipeDetails = props => {
  const recipe = props.recipe;
  const ingr1 = `${recipe.strMeasure1} ${recipe.strIngredient1}`;
  const ingr2 = `${recipe.strMeasure2} ${recipe.strIngredient2}`;
  const ingr3 = `${recipe.strMeasure3} ${recipe.strIngredient3}`;
  const ingr4 = `${recipe.strMeasure4} ${recipe.strIngredient4}`;
  const ingr5 = `${recipe.strMeasure5} ${recipe.strIngredient5}`;
  const ingr6 = `${recipe.strMeasure6} ${recipe.strIngredient6}`;
  const ingr7 = `${recipe.strMeasure7} ${recipe.strIngredient7}`;

  const ingredients = [ingr1, ingr2, ingr3, ingr4, ingr5, ingr6, ingr7];

  ingredients.forEach(ingredient => {
    if (ingredient === 'null null') {
      
    }
  })

  return (
    <div className="recipe-details-container">
      <h1>{recipe.strDrink}</h1>
      <img src={recipe.strDrinkThumb} alt={recipe.strDrink} />
      <div className="ingredients-container">
        <h3>Ingredients</h3>
        ul
      </div>
    </div>
  )
}

export default RecipeDetails;
