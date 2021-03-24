import React, { Component } from "react";
import { Redirect } from "react-router";
import { logout } from '../../../utils';

export default class Logout extends Component {
  //When page visited it clears user token from local storage
  componentDidMount() {
    logout();
  }
  render() {
    return <Redirect to="/login" />;
  }  
}
