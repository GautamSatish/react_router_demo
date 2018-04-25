import React from 'react';

import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Label from 'react-bootstrap/lib/Label';

class Red extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1><Label bsStyle="danger">Red!</Label></h1>
        <p>
          This is the component that will be displayed when the user navigates to &apos;/red&apos;.
        </p>
      </Jumbotron>
    );
  }
}

export default Red;
