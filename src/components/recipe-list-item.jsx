import React from 'react';

const RecipeListItem = props => {
  return (
    <div className="recipe-container" onClick={() => props.setView('recipe-details', props.recipe)}>
      <img className="recipe-thumbnail" src={props.recipe.strDrinkThumb} alt=""/>
      <div className="text-container">
        <h3 className="">{props.recipe.strDrink}</h3>
        <h5>{props.recipe.strCategory}</h5>
      </div>
    </div>
  )
}

export default RecipeListItem;
