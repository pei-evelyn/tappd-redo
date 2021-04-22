import React from 'react';
import { useFormik } from 'formik';
import {
  Button,
  Checkbox,
  Select,
  FormControl,
  FormControlLabel,
  MenuItem,
  InputLabel,
  FormGroup,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  fullHeight: {
    height: '100%',
    minHeight: '85vh',
    width: '100%',
  }
});

const RecipeForm = props => {
  const classes = useStyles();

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
      props.setView('list-recipes', values);
    },
  });

  return (
    <Box
      textAlign="center"
      className={classes.fullHeight}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        component="h2"
        className="search-title"
        mb={3}
      >
        Find Cocktail Recipes
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <FormGroup mb={2}>
          <FormControlLabel
            value={formik.values.isNonAlcoholic}
            control={<Checkbox color="default" onChange={formik.handleChange} name="isNonAlcoholic"/>}
            label="Non-Alcoholic"
            labelPlacement="start"
            className="non-alcoholic-input"
          />
        </FormGroup>
        <Box component="h3" mb={2}>
          OR
        </Box>
        <FormGroup>
          <FormControl variant="filled">
            <InputLabel id="alcoholType">Alcohol Type</InputLabel>
            <Select
              labelId="alcoholType"
              id="alcoholType"
              value={formik.values.alcoholType}
              name="alcoholType"
              onChange={formik.handleChange}
            >
              <MenuItem value="" disabled>Select one</MenuItem>
              {alcoholOptions}
            </Select>
          </FormControl>
        </FormGroup>
        <Box mt={3}>
          <Button
            fullWidth
            variant="contained"
            color="default"
            type="submit"
            size="large"
          >
            Search
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default RecipeForm;
