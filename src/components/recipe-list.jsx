import React from 'react';
import RecipeListItem from './recipe-list-item';

class RecipeList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formData: {
        alcoholType: null,
        isNonAlcoholic: false
      },
      idList: [],
      displayedDrinks: [],
      currentPage: 1
    }
    this.getRecipeIds = this.getRecipeIds.bind(this);
    this.getPaginatedRecipes = this.getPaginatedRecipes.bind(this);
    this.getRecipeWithId = this.getRecipeWithId.bind(this);
    this.recipeApiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
  }

  componentDidMount() {
    this.getRecipeIds(this.props.recipeData);
  }

  getRecipeIds(data) {
    let url = `${this.recipeApiUrl}filter.php`;

    if (data.isNonAlcoholic) {
      url += '?a=Non_Alcoholic';
    } else {
      url += `?i=${data.alcoholType}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const drinkIds = this.grabIdsFromDrinkList(data.drinks);
        this.getPaginatedRecipes(drinkIds);
        this.setState({
          formData: {
            alcoholType: this.props.recipeData.alcoholType,
            isNonAlcoholic: this.props.recipeData.isNonAlcoholic
          },
          idList: drinkIds,
        })
      })
      .catch(error => console.error(error));
  }

  grabIdsFromDrinkList(drinks) {
    console.log(drinks)
    const drinkIds = [];
    drinks.forEach(drink => {
      drinkIds.push(drink.idDrink);
    })
    return drinkIds;
  }

  getPaginatedRecipes(ids) {
    const currentPage = this.state.currentPage;

    const start = (currentPage - 1) * 10;
    const end = (currentPage * 10);
    const displayedIds = ids.slice(start, end);

    console.log(displayedIds);
    displayedIds.forEach(id => this.getRecipeWithId(id));
  }

  getRecipeWithId(id) {
    fetch(`${this.recipeApiUrl}lookup.php?i=${id}`)
      .then(response => response.json())
      .then(recipe => {
        console.log(recipe.drinks[0])
        // recipe.drinks[0]
        this.setState(state => {
          return {
          displayedDrinks: state.displayedDrinks.concat(recipe.drinks[0])
        }
        })
      })
      .catch(error => console.error(errors));
  }

  render() {
    let recipes = null;

    if (this.state.displayedDrinks.length) {
      recipes = this.state.displayedDrinks.map(recipe =>
        <RecipeListItem key={recipe.idDrink} recipe={recipe} setView={this.props.setView} />
      );
    }

    return (
      <div className="recipe-list-container">
        <h1>{this.props.recipeData.alcoholType} Recipes</h1>
        {recipes}
      </div>
    )
  }
}

export default RecipeList;
