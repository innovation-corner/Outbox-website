import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store/configureStore';

import PrivateRoute from './privateRoute';
import LoginPage from '../containers/Login';
import { DashboardView } from '../components/Account/Dashboard/DashboardView';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
          <Switch>
            <Route path='/' exact={true} component={LoginPage} />
            <PrivateRoute path='/dashboard' component={DashboardView} />
          </Switch>
      </ConnectedRouter>
    );
  }
}

export default App;