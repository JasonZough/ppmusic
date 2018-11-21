import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles/common.css'

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root') as HTMLElement
  );
}

render(App)

registerServiceWorker();

/* hot reload */

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
