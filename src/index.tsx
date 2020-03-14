import React from 'react';
import ReactDOM from 'react-dom';
import CardTriagePage from './pages/CardTriagePage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CardTriagePage />, document.getElementById('root'));

serviceWorker.unregister();
