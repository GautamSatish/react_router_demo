import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

// The BrowserRouter is a component that wraps over the root App
// and uses the HTML5 history API (pushState, replaceState and the
// popstate event) to keep your UI in sync with the URL.

ReactDOM.render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'),
);
