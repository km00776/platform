
import { Component, Fragment } from 'react';
import ClientSetup from './components/ClientSetupScreen';
import AllocationScreen from './components/TestCodeAllocationScreen';
import LoginScreen from './components/LoginScreen';
import ContactForm from './components/ContactForm';
import ClientDetails from './components/ClientDetails';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route path="/" exact component={LoginScreen} />
                        <Route path="/Clients" exact component={ClientSetup} />
                        <Route path="/Detail"  component = {ClientDetails} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}