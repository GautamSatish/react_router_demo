import React from 'react';
import { Switch, Route } from 'react-router-dom';

import OthersMenu from './OthersMenu';
import AnyColor from './colors/AnyColor';

// Create a Switch and route the following:
// "/others" --> OthersMenu
// "/others/:color" --> AnyColor

class Others extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/others" component={OthersMenu} />
        <Route path="/others/:color" component={AnyColor} />
      </Switch>
    );
  }
}

export default Others;
