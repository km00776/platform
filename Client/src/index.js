import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import Routes from './components/Router'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import history from './components/History';

ReactDOM.render(<Router history={history}> <App /> </Router>, document.getElementById('root'));
