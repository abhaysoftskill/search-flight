import actionTypes from './actionTypes';

export default function filterFlights(payload) {
  return {
    type: actionTypes.FILTER_FLIGHTS,
    payload,
  };
}
