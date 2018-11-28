import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {PATHS} from "../../constants/routes";
import '../../styles/base.scss'

class Header extends Component {
  render () {
    return <header className="header">
      <Link to={PATHS.INDEX} className="link">Home</Link>
      <Link to={PATHS.ABOUT} className="link">About</Link>
      <Link to={PATHS.ITEMS} className="link">Items</Link>
      <Link to={PATHS.DASH_BOARD_1} className="link">DashBoard1</Link>
      <Link to={PATHS.DASH_BOARD_2} className="link">DashBoard2</Link>
      <Link to={PATHS.LIFTING} className="link">Lifting</Link>
    </header>
  }
}

export default Header;
