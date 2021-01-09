import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import Routes from './components/Router'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(<Router>
    <div className="App">
       
        <Routes />
    </div>
</Router>, document.getElementById('root'));
