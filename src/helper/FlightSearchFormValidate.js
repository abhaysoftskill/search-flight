/* eslint-disable import/prefer-default-export */

export const validateFlightSearchForm = (values) => {
    const errors = {};
    if (!values.origin) {
      errors.origin = 'Please select origin city';
    }
  
    if (!values.destination) {
      errors.destination = 'Please select destination city';
    }
  
    if (!values.date) {
      errors.date = 'Please select departure date';
    }
  
    if (!values.passengers) {
      errors.passengers = 'Please select passengers';
    }
  
    return errors;
  };
  