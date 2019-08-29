import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './screens/home'
import Login from './screens/login'
import Analytics from './screens/analytics'
import Control from './screens/control'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
