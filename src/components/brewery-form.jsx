import React from 'react';
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

const BreweryForm = props => {
  const classes = useStyles();

  const stateOptions = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
  ];

  const states = stateOptions.map(state =>
    <MenuItem value={state} key={state}>{state}</MenuItem>
  );

  const formik = useFormik({
    initialValues: {
      city: '',
      state: '',
      postal: '',
    },
    onSubmit: (values) => {
      console.log(values)
      props.setView('list-breweries', values);
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
        mb={4}
      >
        Find Breweries
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <FormGroup >
          <Box mb={2}>
            <TextField
              fullWidth
              id="city"
              name="city"
              label="Enter City"
              variant="filled"
              value={formik.values.city}
              onChange={formik.handleChange}
            />
          </Box>
        </FormGroup>
        <FormGroup>
          <FormControl variant="filled">
            <InputLabel id="state">Select State</InputLabel>
            <Select
              labelId="state"
              id="state"
              value={formik.values.state}
              name="state"
              onChange={formik.handleChange}
            >
              <MenuItem value="" disabled>Select one</MenuItem>
              {states}
            </Select>
          </FormControl>
        </FormGroup>
        <Box component="h3" mt={2}>
          OR
        </Box>
        <Box mt={2}>
          <TextField
            fullWidth
            id="postal"
            name="postal"
            label="Enter Postal"
            variant="filled"
            value={formik.values.postal}
            onChange={formik.handleChange}
          />
          </Box>
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
  );
}

export default BreweryForm;
