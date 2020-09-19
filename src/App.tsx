import React from 'react';
import {Provider} from 'react-redux';
import './App.scss';

import {  BrowserRouter,  Route,  Switch,} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import configureStore from './Redux/store';

const store = configureStore();
const App = () => (
     <Provider store={store}>
     <BrowserRouter>
       <Switch>
         <Route exact path="/" component={HomePage} />
       </Switch>
     </BrowserRouter>
   </Provider>
);

export default App;
