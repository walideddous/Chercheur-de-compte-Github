import React, { Component, Fragment } from "react";
import Search from "./../users/Search";
import Users from "./../users/Users";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Search />
        <Users />
      </Fragment>
    );
  }
}
