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

import { Container, Typography, Box, Grid } from '@material-ui/core';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'starting-page',
        params: {}
      },
      history: []
    };
    this.setView = this.setView.bind(this);
    this.switchViewBack = this.switchViewBack.bind(this);
    this.determineView = this.determineView.bind(this);
  }

  switchViewBack(name, params, oldHistory) {
    this.setState(state => {
      return ({
        view: {
          name: name,
          params: params
        },
        history: oldHistory
      });
    });
  }

  setView(name, params) {
    this.setState(state => {
      const previousView = Object.assign({}, state.view);
      const newHistory = state.history.concat(previousView);
      return ({
        view: {
          name: name,
          params: params
        },
        history: newHistory
      });
    });
  }

  determineView(view) {
    let content = null;

    switch (view) {
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
          breweryData={this.state.view.params}
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
          brewery={this.state.view.params}
        />;
        break;
      case 'recipe-details':
        content = <RecipeDetails
          setView={this.setView}
          recipe={this.state.view.params}
        />;
        break;
    }
    return content;
  }

  render() {
    const bodyContent = this.determineView(this.state.view.name);

    if (this.state.view.name === 'starting-page') {
      return (
        <Container maxWidth="xl" className="starting-page">
          <StartingPage setView={this.setView}/>
        </Container>
      );
    }

    if (this.state.view.name === 'list-recipes' || this.state.view.name === 'list-breweries') {
      return (
        <Container maxWidth="xl" className={`${this.state.view.name} content`}>
          <Box>
            <Header
              history={this.state.history}
              switchViewBack={this.switchViewBack}
              setView={this.setView}
            />
            </Box>
          {bodyContent}
          <Footer setView={this.setView} />
        </Container>
      );
    }

    return (
      <>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          className={`${this.state.view.name} content`}
        >
          <Grid item xs={12}>
            <Box>
              <Header
                history={this.state.history}
                switchViewBack={this.switchViewBack}
                setView={this.setView}
              />
            </Box>
            {bodyContent}
          </Grid>
          <Footer setView={this.setView} />
        </Grid>
      </>
    );
  }
}

export default App;
