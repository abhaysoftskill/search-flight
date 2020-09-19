import React from 'react';
import { connect } from 'react-redux';
import filterFlights from '../../Redux/actions/FlightActions';
import FlightSearchForm from '../FlightSearchForm/FlightSearchForm';
import TripTabs from '../TripTabs/TripTabs';
import { Col, Row, Card } from 'react-bootstrap';
import './FlightsContainer.scss';
import Flights from '../Flights/Flights';
import FlightDetail from '../FlightDetail/FlightDetail';

// import {
// 	TripTabs,
// 	FlightSearchForm,
// 	TopSingleFlightDetail,
// 	SingleFlightRow,
// } from '../components';

// import filterFlights from '../actions/FlightActions';
import InputRange from 'react-input-range';
import Loader from '../Loader/Loader'

class FlightsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: { min: 0, max: 100000 },
            loader: false
        };
    }


    handleSubmit = (formValues) => {
        debugger
        this.setState({ loader: true })
        formValues.values = this.state.value
        setTimeout(() => {
            this.props.filterFlights(formValues);
            this.setState({ loader: false })
        }, 700)
    }

    render() {
        const { cities, passengers, oneWayFlights, oneWayFlightDetail } = this.props;
        debugger
        return (
            <Row>
                <Col lg="3">
                    <Card className="mb20">
                        <Card.Body>
                            <TripTabs />
                            <FlightSearchForm cities={cities} passengers={passengers} onSubmit={this.handleSubmit} />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <form className="form">
                                <p className="searchTitle">Refine Flight Search</p>
                                <InputRange
                                    draggableTrack
                                    maxValue={100000}
                                    minValue={0}
                                    onChange={value => this.setState({ value })}
                                    value={this.state.value}
                                />
                            </form>
                        </Card.Body>
                    </Card>

                </Col>
                <Col lg="9" className="dataContainer">
                    {this.state.loader ? <Loader /> :
                        (oneWayFlights.length) ? (
                            <div>
                                <Flights flight={oneWayFlightDetail} flightCount={oneWayFlights.length} />
                                {
                                    oneWayFlights.map((flight, index) => (
                                        <FlightDetail flight={flight} key={index} />
                                    ))
                                }
                            </div>
                        ) :
                            (
                                <div className="text-center ptop30">
                                     <img className="flight-logo" src='./assets/plane.svg' />
                                    <div>Search flight to get best offers. Search now !</div>
                                </div>
                            )
                    }
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => {
    return {
        flights: state.flight.flights,
        oneWayFlights: state.flight.oneWayFlights,
        oneWayFlightDetail: state.flight.oneWayFlightDetail,
        cities: state.flight.cities,
        passengers: state.flight.passengers,
        values: state.flight.values
    }
};

const mapDispatchToProps = dispatch => ({
    filterFlights: (payload) => {
        dispatch(filterFlights(payload));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightsContainer);
