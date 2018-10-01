import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import './app.css';

import Login from './login/Login';
import Registration from './registration/Registration'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
      </Fragment>
    );
  };
}
