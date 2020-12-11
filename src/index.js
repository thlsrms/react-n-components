import React, { Fragment } from 'react';
import { render } from 'react-dom';

import App from './App';

render(
  <Fragment>
    <App/>
  </Fragment>,

  document.getElementById('root')
);


// Remove for Production build
if (module.hot) {
  module.hot.accept()
}