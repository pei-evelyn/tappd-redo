import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const RecipeForm = props => {
  return (
    <div>
      <h1 className="search-recipes-heading">Search Recipes</h1>
      <div className="recipe-form">
        <Formik
          initialValues={{
            alcoholType: '',
            drinkName: '',
            isAlcoholic: true
          }}
          onSubmit={(values) => {
            console.log(values);
            props.setView({
              recipes: {
                alcoholType: values.alcoholType,
                drinkName: values.drinkName,
                isAlcoholic: values.isAlcoholic
              }
            })
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

export default RecipeForm;
