import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from './router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <RootRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
