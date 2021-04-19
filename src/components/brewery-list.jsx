import React from 'react';
import BreweryListItem from './brewery-list-item';

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


  // findBreweriesByName(name) {
  //   fetch(`${this.breweryApiUrl}?by_name=${name}`)
  //     .then(response => response.json())
  //     .then(breweries => this.setState(
  //         {
  //           breweries: { keyword: name },
  //           view: { name: 'list-breweries', params: {} }
  //         }
  //     ))
  //     .catch(error => console.error(error));
  // }

  render() {
    const breweriesEl = this.state.breweryList.map(brewery => {
      return <BreweryListItem key={brewery.id} breweryInfo={brewery} setView={this.props.setView} />
    })

    return (
      <div className="brewery-list-container">
        <h1>Breweries in {this.state.formData.city}</h1>
        {breweriesEl}
      </div>
    )
  }
}

export default BreweryList;
