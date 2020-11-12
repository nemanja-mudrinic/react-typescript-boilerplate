import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { landingRoute } from './utils/routes/rotues';
import Landing from './views/landing';

import './App.scss';

const App = () => {
  return (
    <Switch>
      <Route path={landingRoute()} component={Landing} />
      <Redirect to={landingRoute()} />
    </Switch>
  );
};

export default App;
