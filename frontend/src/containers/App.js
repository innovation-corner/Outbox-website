import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import LoginPage from '../components/LoginPage/LoginView';
import DashboardPage from '../components/Dashboard/DashboardView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact={true} component={LoginPage} />
            <PrivateRoute path='/dashboard' component={DashboardPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;