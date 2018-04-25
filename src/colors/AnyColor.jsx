import React from 'react';

import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Label from 'react-bootstrap/lib/Label';

class AnyColor extends React.Component {
  render() {
    let style;

    switch (this.props.match.params.color) {
      case 'yellow':
        style = 'warning';
        break;
      case 'green':
        style = 'success';
        break;
      default:
        style = 'default';
    }
    return (
      <Jumbotron>
        <h1><Label bsStyle={style}>{this.props.match.params.color}!</Label></h1>
        <p>
          This is the component that will be displayed when the user navigates
          to &apos;/others/:color&apos;.
        </p>
        <p>
          Current URL is {this.props.match.url}, the param color has value
          {this.props.match.params.color}.
        </p>
      </Jumbotron>
    );
  }
}


export default AnyColor;
