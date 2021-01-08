import {Component} from  'react';
import ClientSetup from './ClientSetupScreen';
import LoginScreen from './LoginScreen';
import ClientDetails from './ClientDetails';
import { Router, Switch, Route } from "react-router-dom";
import history from './History';


export default class Routes extends Component {
    render() {
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={LoginScreen} />
                    <Route path="/ClientDetails" component = {ClientDetails} />
                    <Route path="/ClientSetup" component = {ClientSetup} />
                </Switch>
            </Router>
        )
    }
}