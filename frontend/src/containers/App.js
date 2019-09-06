import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import LoginPage from '../containers/Login';
import { DashboardView } from '../components/Account/Dashboard/DashboardView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact={true} component={LoginPage} />
            <PrivateRoute path='/dashboard' component={DashboardView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;