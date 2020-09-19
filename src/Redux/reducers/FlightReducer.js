import actionTypes from '../actions/actionTypes';
import Flights from '../../DataModal/flights.json';

const cityArrfun = () => {
  const citiesArr = new Set();

  Flights.forEach((flight) => {
    citiesArr.add(flight.source);
    citiesArr.add(flight.destination);
  });

  return citiesArr;
};

const initialState = {
  cities: Array.from(cityArrfun()),
  passengers: [
    {
      label: 1,
      value: '1',
    },
    {
      label: 2,
      value: '2',
    },
    {
      label: 3,
      value: '3',
    }],
  flights: Flights,
  oneWayFlights: [],
  oneWayFlightDetail: {},
  value: { min: 0, max: 100000 },
};

export default function flightReducer(state = initialState, action) {
  debugger
  switch (action.type) {
    case actionTypes.FILTER_FLIGHTS: {
      const flights = state.flights.filter(flight => (flight.source.trim() === action.payload.origin[0].trim())
        && flight.destination.trim() === action.payload.destination[0].trim()
         && (flight.fare.split("Rs ")[1] > action.payload.values.min) && (flight.fare.split("Rs ")[1] < action.payload.values.max));
      if (action.payload.passengers) {
        flights.map((flight) => {
          flight.totalprice = flight.fare.split("Rs ")[1] * parseInt(action.payload.passengers.value, 10);
          return flight.totalprice;
        });
      }
      return {
        ...state,
        oneWayFlights: flights,
        value: { min: action.payload.min, max: action.payload.max },
        oneWayFlightDetail: {
          origin: action.payload.origin[0],
          destination: action.payload.destination[0],
          date: action.payload.date,
        },
      };
    }
    default:
      return state;
  }
}
