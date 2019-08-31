import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/home/index';

export const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Login} />
            {/* <Route path="/login" component={Login} />
            <Route path="/register" component={Register} /> */}
        </div>
    </Router>
);