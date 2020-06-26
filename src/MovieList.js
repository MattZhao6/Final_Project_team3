import React, { Component } from "react";
import "./styles.css";

import Content from "./container/content";
import Header from "./container/header";
import NavBar from "./container/navBar";
import Menu from "./container/menu";

class MovieList extends Component {
  render() {
    return (
      <div>
        <Header className="header" />
        <Menu />
        <NavBar />
        <Content />
      </div>
    );
  }
}

export default MovieList;
