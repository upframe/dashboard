import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/'

import Home from './screens/home/'
import Login from './screens/login'

function App() {
  return (
    <Router>
      <Navbar />
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
