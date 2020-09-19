import React from 'react';
import {
  Field, reduxForm,
} from 'redux-form';
import renderTypeAhead from '../FormComponent/TypeAhead';
import renderSelectField from '../FormComponent/Select';
import { TextInput } from '../FormComponent/TextInput';
import { validateFlightSearchForm } from '../../helper/FlightSearchFormValidate';

import './FlightSearchForm.scss'

class FlightSearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      date: '',
		};
	}


	render() {
		const {
      handleSubmit, onSubmit, cities, passengers, invalid,
    } = this.props;
    const { date } = this.state;
		return(
			<form onSubmit={handleSubmit(onSubmit)} className="search-form ptop20">
        <div className="form-group">
          <Field
            name="origin"
            component={renderTypeAhead}
            placeholder="Enter Origin City"
            options={cities}
            emptyLabel={false}
            id={1}
            menuId={1}
          />
        </div>
        <div className="form-group">
          <Field
            name="destination"
            component={renderTypeAhead}
            placeholder="Enter Destination City"
            options={cities}
            emptyLabel={false}
            id={2}
            menuId={2}
          />
        </div>
        <div className="form-group position-relative date-field">
          <Field
            name="date"
            type="date"
            component={TextInput}
            placeholder="Departure date"
           
          />
          <i className="fa fa-calendar" aria-hidden="true"></i>
        </div>
        <div className="form-group">
          <Field
            name="passengers"
            component={renderSelectField}
            options={passengers}
            placeholder="Passengers"
          />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
		)
	}
}

FlightSearchForm = reduxForm({
  form: 'search_flight',
 validate: validateFlightSearchForm,
})(FlightSearchForm);

export default FlightSearchForm;