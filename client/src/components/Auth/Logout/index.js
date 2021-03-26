import React, { Component } from "react";
import { Redirect } from "react-router";
export default class Logout extends Component {
  //When page visited it clears user local storage
  componentDidMount() {
    localStorage.clear();
  }
  render() {
    return <Redirect to="/login" />;
  }  
}
