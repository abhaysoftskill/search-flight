import React from 'react';
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';
import './FlightDetail.scss';
class FlightDetail extends React.Component {
    constructor(props) {
        super(props);
        this.calculateFlightDuration = this.calculateFlightDuration.bind(this);
    }

    calculateFlightDuration(departureTime, arrivalTime) {
        const a = moment.duration(departureTime, 'hours minutes');
        const b = moment.duration(arrivalTime, 'hours minutes');
        const displayDuration = b.subtract(a);
        return displayDuration.hours() + 'h ' + displayDuration.minutes() + 'm';
    }

    render() {
        const { flight } = this.props;
        return (
            <Row className="detailsBox">
                <Col lg="8">
                    <p className="flight-price margin-0">
                        Price: <i className="fa fa-inr" aria-hidden="true"></i>
                        {flight.fare.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                    <div className="flight-name flight-name-holder">
                        <p className="margin-0">{flight.flight_id}</p>
                    </div>
                    <div>
                        <p className="margin-0 flight-detail-top">{flight.source_code}{" "}{">"}{" "}{flight.destination_code}</p>
                    </div>
                    <div>
                        <p className="margin-0 flight-detail-top">Depart:{` `}{flight.departs_at}</p>
                    </div>
                    <div>
                        <p className="margin-0 flight-detail-top">Arrive:{` `}{flight.arrives_at}</p>
                    </div>


                </Col>
                <Col lg="4" className="alignCenter">
                    <div className="logo-holder mb20">
                        <img className="flight-logo" src='./assets/plane.svg' />
                    </div>
                    <div>
                        <button className="btn btn-primary">Book this flight</button>
                    </div>
                </Col>
            </Row >

        )
    }
}

export default FlightDetail;