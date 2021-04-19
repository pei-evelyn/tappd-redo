import React from 'react';
import Header from './header';
import Footer from './footer-nav';
import StartingPage from './starting-page'
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
        name: 'starting-page',
        params: {}
      },
      recipes: {
        alcoholType: null,
        isNonAlcoholic: false,
        // drinkData: {
        //   fullIdList: [],
        //   displayedRecipes: [],
        //   currentPage: 1
        // },
        // selected: null,
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
    let content = null;

    switch (view) {
      case 'starting-page':
        content = <StartingPage
          setView={this.setView}
        />;
        break;
      case 'homepage':
        content = <Homepage
          setView={this.setView}
        />;
        break;
      case 'search-breweries':
        content = <BreweryForm
          setView={this.setView}
        />;
        break;
      case 'search-recipes':
        content = <RecipeForm
          setView={this.setView}
        />;
        break;
      case 'list-breweries':
        content = <BreweryList
          setView={this.setView}
          breweries={this.state.breweries.list}
        />;
        break;
      case 'list-recipes':
        content = <RecipeList
          setView={this.setView}
          recipeData={this.state.view.params}
        />;
        break;
      case 'brewery-details':
        content = <BreweryDetails
          setView={this.setView}
          brewerySelected={this.state.breweries.selected}
        />;
        break;
      case 'recipe-details':
        content = <RecipeDetails
          setView={this.setView}
          recipeDetails={this.state.view.params}
        />;
        break;
    }
    return content;
  }

  render() {
    const bodyContent = this.determineView(this.state.view.name);
    console.log(bodyContent)
    return (
      <div className={`${this.state.view.name} content-container`}>
        <Header />
        {bodyContent}
      </div>
    )
  }
}

export default App;
