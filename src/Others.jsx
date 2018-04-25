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
      <h1>Place Holder</h1>
    );
  }
}

export default Others;
