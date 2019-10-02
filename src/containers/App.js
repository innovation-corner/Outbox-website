import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store/configureStore';

import PrivateRoute from './privateRoute';
import LoginPage from '../containers/Login';
import ConfirmationView from '../components/Confirmation/ConfirmationView';
import Dashboard from '../containers/account/Dashboard';
import Users from '../containers/account/Users';
import Location from '../containers/account/Location';
import LocationDetails from '../containers/account/location/LocationDetails';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route path='/email-confirmation/:token' component={ConfirmationView} />
          <PrivateRoute path='/home/dashboard' component={Dashboard} />
          <PrivateRoute path='/home/users' component={Users} />
          <PrivateRoute path="/home/location/:id" component={LocationDetails} />
          <PrivateRoute path="/home/location" component={Location} />
          <Redirect from='*' to='/'/>
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default App;