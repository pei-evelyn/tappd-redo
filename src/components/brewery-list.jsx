import React from 'react';
import BreweryListItem from './brewery-list-item';
import { Container, Typography, Box, Button } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

class BreweryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        city: '',
        state: '',
        postal: 0
      },
      breweryList: [],
      currentPage: 1
    };
    this.getBreweries = this.getBreweries.bind(this);
    this.breweryApiUrl = 'https://api.openbrewerydb.org/breweries';
  }

  componentDidMount() {
    this.getBreweries(this.props.breweryData);
  }

  getBreweries(values) {
    let url = `${this.breweryApiUrl}?page=${this.state.currentPage}`;

    if (values.city) {
      url += `&by_city=${values.city}`;
    }

    if (values.state) {
      url+= `&by_state=${values.state}`;
    }

    if (values.postal) {
      url+= `&by_postal=${values.postal}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(breweries => {
        console.log(breweries);
        this.setState({
          formData: {
            city: values.city,
            state: values.state,
            postal: values.postal
          },
          breweryList: breweries
      });
    })
      .catch(error => console.error(error));
  }

  getNextPageData(event, page) {
    console.log(event, page)
    // this.setState({
    //   currentPage: page
    // })
  }

  render() {
    const breweriesEl = this.state.breweryList.map(brewery => {
      return <BreweryListItem key={brewery.id} breweryInfo={brewery} setView={this.props.setView} />
    })

    if (!this.state.breweryList.length) {
      return (
        <Container className="no-breweries-container">
          <Box>No breweries found.</Box>
          <Box>Please try again.</Box>
          <Box>
            <Button
              onClick={() => this.props.setView('search-breweries', {})}
              color="default"
            >
              Search
            </Button>
          </Box>
        </Container>
      )
    }
    return (
      <Container maxWidth="sm">
        <Box variant="h2" className="brewery-list-title">
          {this.state.formData.city || this.state.formData.postal} Breweries
        </Box>
        <Box>
          {breweriesEl}
        </Box>
        {/* <Box>
          <Pagination onChange={(event, page) => this.getNextPageData(event, page)} />
        </Box> */}
      </Container>
    )
  }
}

export default BreweryList;
