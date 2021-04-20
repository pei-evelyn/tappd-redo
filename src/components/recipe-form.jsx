import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from 'formik';
import {
  Button,
  TextField,
  Checkbox,
  Select,
  FormControl,
  FormControlLabel,
  MenuItem,
  InputLabel,
  FormGroup,
  Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



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
    <MenuItem value={alcohol} key={alcohol}>{alcohol}</MenuItem>
  );

  const formik = useFormik({
    initialValues: {
      alcoholType: '',
      isNonAlcoholic: false
    },
    onSubmit: (values) => {
      console.log(values)
      props.setView('list-recipes', values);
    },
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
    >
      <FormControl onSubmit={formik.handleSubmit}>
        <FormGroup>
          <FormControlLabel
            value={formik.values.isNonAlcoholic}
            control={<Checkbox color="primary" />}
            label="Non-Alcoholic?"
            labelPlacement="start"
            name="isNonAlcoholic"
          />
        </FormGroup>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Alcohol Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formik.values.alcoholType}

            name="alcoholType"
          >
            <MenuItem value="" disabled>Select one</MenuItem>
            {alcoholOptions}
          </Select>
        </FormControl>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
        >
          Search Recipes
        </Button>
      </FormControl>
    </Box>
  )
  // return (
  //   <div>
  //     <h1 className="search-recipes-heading">Search Recipes</h1>
  //     <div className="recipe-form">
  //       <Formik
  //         initialValues={{
  //           alcoholType: '',
  //           isNonAlcoholic: false
  //         }}
  //         onSubmit={(values) => {
  //           console.log(values)
  //           props.setView('list-recipes', values);
  //         }}
  //       >
  //         <Form>
  //           <label htmlFor="isAlcoholic">Non-Alcoholic?</label>
  //           <Field type="checkbox" name="isNonAlcoholic" />

  //           <h3>OR</h3>

  //           <label htmlFor="alcoholType">Alcohol Type</label>
  //           <Field as="select" name="alcoholType" id="alcoholType">
  //             <option value="" disabled>Select one</option>
  //             {alcoholOptions}
  //           </Field>

  //           <button type="submit">Search Recipes</button>
  //         </Form>
  //       </Formik>
  //     </div>
  //   </div>
  // )
}

export default RecipeForm;
