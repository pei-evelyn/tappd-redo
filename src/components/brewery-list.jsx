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
    // this.getBreweriesByPostal = this.getBreweriesByPostal.bind(this);
    this.breweryApiUrl = 'https://api.openbrewerydb.org/breweries';

  }

  componentDidMount() {
    // console.log(this.props.breweryData.values)
    this.getBreweries(this.props.breweryData);
  }

  formatDataInputs(data) {
    for (const input in data) {
      // console.log(input)
      // console.log(data[input])
      data[input].replace(' ', '_');
    }
    console.log(data)
    return data;
  }

  getBreweries(values) {
    const formatedValues = this.formatDataInputs(values);

    let url = `${this.breweryApiUrl}?page=${this.currentPage}`;

    if (formatedValues.city) {
      url += `$`
    }

    fetch(`?by_city=${city}&by_state=${state}`)
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

  render() {
    return 'hello'
  }
}

export default BreweryList;
