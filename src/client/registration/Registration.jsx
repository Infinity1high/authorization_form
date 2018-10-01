import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import TextField from '../common/TextField';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import {email, required} from "../utils/validation";
import * as actions from "../store/actions/AuctActions";


class Registration extends Component {

  render() {
    const { ...props } = this.props
    return (
      <div className="registration-container">
        <form className="registration-form">
          <h2>Add some information :) </h2>
          <TextField
            {...props}
            name="name"
            placeholder="How your friends call you?"
            validate={[required]}
            label="Name"
          />
          <TextField
            {...props}
            name="lastName"
            placeholder="What is written in your passport?"
            validate={[required]}
            label="Last name"
          />
          <TextField
            {...props}
            name="password"
            placeholder="Your new password"
            validate={[required]}
            label="Password"
          />
          <TextField
            {...props}
            name="confirmPassword"
            placeholder="Confirm your password"
            validate={[required]}
            label="Confirm password"
          />
          <Button color="danger">Cancel</Button>
          <Button color="success">Save</Button>
        </form>
      </div>
    );
  }
}


export default compose(
  // connect(null, actions),
  reduxForm({
    form: 'registration',
  }),

)(Registration)
