import {
    createStore,
    compose,
  } from 'redux';
  import rootReducer from '../Redux/reducers';
  
  export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
      rootReducer,
      initialState,
      composeEnhancers(),
    );
    return store;
  }
  