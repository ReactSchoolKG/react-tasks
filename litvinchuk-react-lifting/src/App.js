import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './styles/base.scss';

import MainLayout from "./Layout/Main";
import HomeContainer from "./containers/Home";
import AboutContainer from "./containers/About";
import ItemsContainer from "./containers/Items";
import ItemDetailsContainer from "./containers/ItemDetails";
import SimpleText from "./containers/SimpleText";
import Error404 from "./containers/Error404";
import Lifting from "./containers/Lifting"

import {PATHS} from "./constants/routes";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <MainLayout>
              <Switch>
                <Route exact path={PATHS.INDEX} component={HomeContainer} />
                <Route exact path={PATHS.DASH_BOARD_1} component={SimpleText} />
                <Route exact path={PATHS.DASH_BOARD_2} render= {() => (
                  <Redirect to={PATHS.DASH_BOARD_1}/>
                  )} />
                <Route path={PATHS.ABOUT} component={AboutContainer}/>
                <Route exact path={PATHS.ITEMS} component={ItemsContainer} />
                <Route exact path={PATHS.ITEM_DETAILS} component={ItemDetailsContainer} />
                <Route exact path={PATHS.LIFTING} component={Lifting}/>
                <Route component={Error404} />
              </Switch>
            </MainLayout>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
