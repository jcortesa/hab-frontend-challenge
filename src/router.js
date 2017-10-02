import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import App from './App';

export default (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={App}/>
      </Switch>
    </div>
  </Router>
);
