import React, { Component } from 'react';
import Header from "../Header";

class MainLayout extends Component {
  render () {
    return <div className="main-layout">
      <Header />
      { this.props.children }
    </div>
  }
}

export default MainLayout;
