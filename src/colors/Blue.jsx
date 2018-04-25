import React from 'react';

import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Label from 'react-bootstrap/lib/Label';

class Blue extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1><Label bsStyle="primary">Blue!</Label></h1>
        <p>
          This is the component that will be displayed when the user navigates to &apos;/blue&apos;.
        </p>
      </Jumbotron>
    );
  }
}

export default Blue;
