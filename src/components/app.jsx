import React from 'react';
import Header from './header';
import Footer from './footer-nav';
import Homepage from './homepage';
import BreweryForm from './brewery-form';
import BreweryList from './brewery-list';
import BreweryDetails from './brewery-details';
import RecipeForm from './recipe-form';
import RecipeList from './recipe-list';
import RecipeDetails from './recipe-details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'homepage',
        params: {}
      },
      recipes: {
        alcohol: null,
        ingredient: null,
        isAlcoholic: true,
        list: [],
        selected: null,
      },
      breweries: {
        location: {
          city: null,
          state: null,
          zipcode: 0
        },
        keyword: null,
        type: null,
        list: [],
        selected: null
      }
    };
    this.setView = this.setView.bind(this);
    this.determineView = this.determineView.bind(this);
    this.getBreweriesByCityState = this.getBreweriesByCityState.bind(this);
    this.getBreweriesByPostal = this.getBreweriesByPostal.bind(this);
    this.breweryApiUrl = 'https://api.openbrewerydb.org/breweries';
    this.recipeApiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
  }

  // Fetch API requests for BREWERY INFO

  getBreweriesByCityState(city, state) {
    fetch(`${this.breweryApiUrl}?by_city=${city}&by_state=${state}`)
      .then(response => response.json())
      .then(breweries => {
        console.log(breweries);
        this.setState({
          breweries: {
            location: { zipcode: postal },
            list: breweries
          },
          view: { name: 'list-breweries', params: {} }
        })
      })
      .catch(error => console.error(error));
  }

  getBreweriesByPostal(postal) {
    fetch(`${this.breweryApiUrl}?by_postal=${postal}`)
      .then(response => response.json())
      .then(breweries => this.setState(
        {
          breweries: {
            location: { zipcode: postal },
            list: breweries
          },
          view: { name: 'list-breweries', params: {} }
        }
      ))
      .catch(error => console.error(error));
  }

  findBreweriesByName(name) {
    fetch(`${this.breweryApiUrl}?by_name=${name}`)
      .then(response => response.json())
      .then(breweries => this.setState(
          {
            breweries: { keyword: name },
            view: { name: 'list-breweries', params: {} }
          }
      ))
      .catch(error => console.error(error));
  }

  // Fetch API calls for RECIPE INFO

  getRecipesByName(name) {
    fetch(`${this.recipeApiUrl}?s=${name}`)
      .then(response => response.json())
      .then(recipes => console.log(recipes))
      .catch(error => console.error(error));
  }

  getRecipesByAlcohol() {
    fetch(`${this.recipeApiUrl}?`)
  }
  // Methods related to VIEW setting

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  determineView(view) {
    switch (view) {
      case 'homepage':
        return
        <Homepage
          setView={this.setView}
        />;
      case 'search-breweries':
        return
        <BreweryForm
          setView={this.setView}
        />;
      case 'search-recipes':
        return
        <RecipeForm
          setView={this.setView}
        />;
      case 'list-breweries':
        return
        <BreweryList
          setView={this.setView}
          breweries={this.state.breweries.list}
        />
      case 'list-recipes':
        return
        <RecipeList
          setView={this.setView}
          recipes={this.state.recipes.list}
        />;
      case 'brewery-details':
        return
        <BreweryDetails
          setView={this.setView}
          brewerySelected={this.state.breweries.selected}
        />;
      case 'recipe-details':
        return
        <RecipeDetails
          setView={this.setView}
          recipeSelected={this.state.recipes.selected}
        />;
    }
  }

  render() {
    const bodyContent = this.determineView(this.state.view.name);
    return (
      <div className={`${this.state.view.name} content-container`}>
        <Header />
        {bodyContent}
      </div>
    )
  }
}

export default App;
