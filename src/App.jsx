import React from 'react';

import MainMenu from './MainMenu';
import MainPanel from './MainPanel';

class App extends React.Component {
  render() {
    return (
      <div>
        <MainMenu />
        <MainPanel />
      </div>
    );
  }
}

export default App;
