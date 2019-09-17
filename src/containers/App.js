import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store/configureStore';

import PrivateRoute from './privateRoute';
import LoginPage from '../containers/Login';
import ConfirmationView from '../components/Confirmation/ConfirmationView';
import DashboardView from '../components/Account/Dashboard/DashboardView';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/email-confirmation/:token' component={ConfirmationView} />
          <PrivateRoute path='/dashboard' component={DashboardView} />
          <Redirect from='*' to='/'/>
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default App;