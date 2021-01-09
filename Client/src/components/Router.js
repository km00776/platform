import {Component} from  'react';
import ClientSetup from './ClientSetupScreen';
import LoginScreen from './LoginScreen';
import ClientDetails from './ClientDetails';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import history from './History';

 



export default class Routes extends Component {
    render() {
        return(
            <Router history={history} >
                
                    <Route  path="/" exact component={LoginScreen} />
                    <Route  path="/ClientDetails" component = {ClientDetails} />
                    <Route  path="/ClientSetup" component = {ClientSetup} />
               
            </Router>
        )
    }
}