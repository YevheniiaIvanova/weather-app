import 'index.scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setupIcons from 'setupIcons';

import Error404 from './pages/Error404';
import WeatherPage from './pages/WeatherPage';

setupIcons();

render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/weather">
          <WeatherPage />
        </Route>
        <Route exact path="/">
          <WeatherPage />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
