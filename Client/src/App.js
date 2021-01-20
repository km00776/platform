
import { Component, useState, Fragment, useEffect } from 'react';
import ClientSetup from './components/ClientSetupScreen';
import AllocationScreen from './components/TestCodeAllocationScreen';
import LoginScreen from './components/LoginScreen';
import ContactForm from './components/ContactForm';
import ClientDetails from './components/ClientDetails';
import { PermanentDrawerLeft } from './components/DrawerComponent';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


function App() {
    const checkAuthenticated = async () => {
        try {
            const response = await fetch("/authentication/verify", {
                method: "POST",
                headers: {jwt_token: localStorage.json}
            });
            const parseRes = await response.json();
            parseRes  === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
        }
        catch(error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        checkAuthenticated();
    }, [] );

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setAuth = boolean => {
        setIsAuthenticated(boolean);
    }

        return (
            <Router>
                    <Fragment>
                        <Switch>
                            <Route exact path="/" render = {props => !isAuthenticated ? (<LoginScreen  {...props} setAuth = {setAuth} />) : (<Redirect to= "/Client" />)  } />
                            <Route exact path="/Clients" render = {props => !isAuthenticated ? (<ClientSetup {...props} setAuth = {setAuth} />) : (<Redirect to= "/" />)  } />

                        </Switch>
                </Fragment>
            </Router>
        );
   
}

export default App;