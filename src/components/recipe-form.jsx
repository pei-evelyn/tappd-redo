import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alcohol: '',
      drinkName: '',
      isAlcoholic: true
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Search Recipes</h1>
        <div className="recipe-form">
          <Formik
            initialValues={{
              alcoholType: '',
              drinkName: '',
              isAlcoholic: true
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <label htmlFor="isAlcoholic">Non-Alcoholic</label>
              <Field type="checkbox" name="isAlcoholic" />
              
              <label htmlFor="alcoholType">Alcohol Type</label>
              <Field id="alcoholType" name="alcoholType" placeholder="Vodka" />

              <label htmlFor="drinkName">Drink Name</label>
              <Field id="drinkName" name="drinkName" placeholder="Moscow Mule" />

              <button type="submit">Search</button>
            </Form>
          </Formik>
        </div>
      </div>
    )
  }
}

export default RecipeForm;
