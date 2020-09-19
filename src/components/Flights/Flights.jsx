import React from 'react';

class FlightDetail extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { flight, flightCount } = this.props;
		return(
			<div className="flight-detail margin-bottom-30">
				<div className="d-table flight-detail-heading">
		<p className="d-table-cell text-black margin-0">{flight.origin}{` `}{`>`}{` `}{flight.destination}</p>
        </div>
        <p className="text-grey margin-0 results-fnd">
		<span>{flightCount == 1 ? `${flightCount} flight`:`${flightCount} flight(s)`} found</span>
        </p>
      </div>
		)
	}
}

export default FlightDetail;