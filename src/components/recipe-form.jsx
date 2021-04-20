import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from 'formik';
import { Button, TextField, Checkbox, Select, FormControl, MenuItem } from '@material-ui/core';




const RecipeForm = props => {
  const alcoholTypes = [
    'Vodka',
    'Rum',
    'Brandy',
    'Gin',
    'Tequila',
    'Scotch',
    'Bourbon',
    'Amaretto',
    'Vermouth',
    'Champagne'
  ];

  const alcoholOptions = alcoholTypes.map(alcohol =>
    <option value={alcohol} key={alcohol}>{alcohol}</option>
  );

  return (
    <div>
      <h1 className="search-recipes-heading">Search Recipes</h1>
      <div className="recipe-form">
        <Formik
          initialValues={{
            alcoholType: '',
            isNonAlcoholic: false
          }}
          onSubmit={(values) => {
            console.log(values)
            props.setView('list-recipes', values);
          }}
        >
          <Form>
            <label htmlFor="isAlcoholic">Non-Alcoholic?</label>
            <Field type="checkbox" name="isNonAlcoholic" />

            <h3>OR</h3>

            <label htmlFor="alcoholType">Alcohol Type</label>
            <Field as="select" name="alcoholType" id="alcoholType">
              <option value="" disabled>Select one</option>
              {alcoholOptions}
            </Field>

            <button type="submit">Search Recipes</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default RecipeForm;
