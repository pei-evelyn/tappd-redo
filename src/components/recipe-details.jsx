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
    return <li className="ingredient" key={ingr}>{ingr}</li>
  })

  return (
    <div className="recipe-details-container">
      <h1>{recipe.strDrink}</h1>
      <img src={recipe.strDrinkThumb} alt={recipe.strDrink} />
      <div className="ingredients-container">
        <h3>Ingredients</h3>
        <ul>
          {ingredientsEl}
        </ul>
      </div>
      <div className="directions-container">
        <h3>Directions</h3>
        <p>{recipe.strInstructions}</p>
      </div>
    </div>
  )
}

export default RecipeDetails;
