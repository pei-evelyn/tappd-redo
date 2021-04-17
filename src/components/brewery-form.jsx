import React from 'react';

class BreweryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      state: '',
      postal: '',
      name: ''
    };
    this.stateOptions = [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
      'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa'
      'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
      'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
      'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota,
      'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
      'Wisconsin', 'Wyoming'
    ];
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="city-input">
            <label htmlFor="city">CITY</label>
            <input
              type="text"
              className=""
              id="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </div>
          <div className="state-input">
            <label htmlFor="state">STATE</label>
            <input
              type="text"
              className=""
              id="state"
              value={this.state.state}
              onChange={this.handleChange}
            />
          </div>
          <h3>OR</h3>
          <div className="postal-input">
            <label htmlFor="postal">POSTAL CODE</label>
            <input
              type="number"
              className=""
              id="postal"
              value={this.state.postal}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default BreweryForm;
