import {Component} from  'react';
import ClientSetup from './ClientSetupScreen';
import LoginScreen from './LoginScreen';
import ClientDetails from './ClientDetails';
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import history from './History';





export default class Routes extends Component {
    render() {
        return(
            <Router history={history} >
                <Switch>
                    <Route exact path="/" exact component={LoginScreen} />
                    <Route exact path="/ClientDetails" component = {ClientDetails} />
                    <Route exact path="/ClientSetup" component = {ClientSetup} />
                </Switch>
            </Router>
        )
    }
}