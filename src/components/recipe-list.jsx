import React from 'react';
import RecipeListItem from './recipe-list-item';
import { Box, Container } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
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
    const drinkIds = [];
    drinks.forEach(drink => {
      drinkIds.push(drink.idDrink);
    })
    return drinkIds;
  }

  getNextPageData(page) {
    this.setState({
      currentPage: page
    });
    this.getPaginatedRecipes(this.state.idList);
  }

  getPaginatedRecipes(ids) {
    const currentPage = this.state.currentPage;

    const start = (currentPage - 1) * 10;
    const end = (currentPage * 10);
    const displayedIds = ids.slice(start, end);

    displayedIds.forEach(id => this.getRecipeWithId(id));
  }

  getRecipeWithId(id) {
    fetch(`${this.recipeApiUrl}lookup.php?i=${id}`)
      .then(response => response.json())
      .then(recipe => {
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
      <Box className="recipe-list-container">
        <Box component="h2" className="recipes-title">
          {(this.state.formData.isNonAlcoholic ? 'Non-Alcoholic' : this.state.formData.alcoholType)} Recipes
        </Box>
        {recipes}
        {/* <Box>
          <Pagination
            count={Math.ceil(this.state.idList / 10)}
            onChange={(event, page) => this.getNextPageData(page)}
          />
        </Box> */}
      </Box>
    )
  }
}

export default RecipeList;
