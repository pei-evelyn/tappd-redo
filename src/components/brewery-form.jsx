import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class BreweryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      state: '',
      postal: '',
      name: '',
      isValid: false
    };
    this.stateOptions = [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
      'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
      'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
      'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
      'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
      'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
      'Wisconsin', 'Wyoming'
    ];
    // this.handleChange = this.handleChange.bind(this);
    // this.checkFormInputs = this.checkFormInputs.bind(this);
  }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   // this.checkFormInputs();
  //   console.log(event)
  // }

  // checkFormInputs() {
  //   if (this.state.city || this.state.state) {
  //     return isNaN(parseInt(this.state.city));
  //   }

  //   if (this.state.)
  // }

  render() {
    const states = this.stateOptions.map(state => {
      return <option value={state} key={state}>{state}</option>
    });

    return (
      <div className="brewery-form-container">
        <Formik
          initialValues={{
            city: '',
            state: '',
            postal: '',
            name: '',
          }}
          onSubmit={(values) => {
            console.log(values);
            this.props.setView('list-breweries', values)
            }}
          >
          <Form>
            <label htmlFor="city">Enter City</label>
            <Field type="text" name="city" />

            <label htmlFor="state">Select State</label>
            <Field as="select" name="state" id="state">
              <option value="" disabled>Select one</option>
              {states}
            </Field>

            <h3>OR</h3>

            <label htmlFor="postal">Enter Postal Code</label>
            <Field type="number" placeholder="ie. 92620" name="postal" />

            <button type="submit">Search Breweries</button>
          </Form>
        </Formik>
      </div>
    )
  }
}

export default BreweryForm;
