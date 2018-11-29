import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import ScrollMemory from 'react-router-scroll-memory';

import App from './components/App';
import ThreeScene from './components/threeScene';


class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <LastLocationProvider>
          <ScrollMemory />
          <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/sample' component={ThreeScene}/>
          </Switch>
        </LastLocationProvider>
      </BrowserRouter>
    );
  }
}

export default AppRoutes;
