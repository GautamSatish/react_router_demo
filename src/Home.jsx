import React from 'react';

import Jumbotron from 'react-bootstrap/lib/Jumbotron';

class Home extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>Home!</h1>
        <p>
          This is the home page of a simple demo app that illustrates React Router.
        </p>
      </Jumbotron>
    );
  }
}

export default Home;
