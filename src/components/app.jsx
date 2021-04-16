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
      },
      breweries: {
        location: {
          city: null,
          state: null,
          zipcode: 0
        },
        type: null,
        list: []
      }
    };
    this.setView = this.setView.bind(this);
    this.determineView = this.determineView.bind(this);
    this.getBreweriesByCityState = this.getBreweriesByCityState.bind(this);
    this.getBreweriesByPostal = this.getBreweriesByPostal.bind(this);
    this.breweryApiUrl = 'https://api.openbrewerydb.org/breweries';
    this.recipeApiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

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
      .then(breweries => this.setState({
          breweries: {
            location: { zipcode: postal },
            list: breweries
          },
          view: { name: 'list-breweries', params: {} }
        }))
      .catch(error => console.error(error));
  }

  determineView(view) {
    switch (view) {
      case 'homepage':
        return <Homepage setView={this.setView} />
      case 'search-breweries':
        return <BreweryForm />
      case 'search-recipes':
        return <RecipeForm />
      case 'list-breweries':
        return
      case 'list-recipes':
        return 
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
