import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Red from './colors/Red';
import Blue from './colors/Blue';
import Others from './Others';

// This is essential a container component that will house the component
// that the router selects for the path.
// Implement a Switch and connect all the paths to corresponding components

// "/" --> Home
// "/red" --> Red
// "/blue" --> blue
// "/others" --> Others

class MainPanel extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/red" component={Red} />
        <Route exact path="/blue" component={Blue} />
        <Route path="/others" component={Others} />
      </Switch>
    );
  }
}

export default MainPanel;
