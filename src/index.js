import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './route/index'

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
