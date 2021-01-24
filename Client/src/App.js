
import { Component, useState, Fragment, useEffect } from 'react';
import ClientSetup from './components/ClientSetupScreen';
import AllocationScreen from './components/TestCodeAllocationScreen';
import LoginScreen from './components/LoginScreen';
import ContactForm from './components/ContactForm';
import ClientDetails from './components/ClientDetails';
import { PermanentDrawerLeft } from './components/DrawerComponent';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setAuth = boolean => {
        setIsAuthenticated(boolean);
    }

    const checkAuthenticated = async () => {
        try {
            const response = await fetch("/auth/verify", {
                method: "POST",
                headers: {jwt_token: localStorage.token}
            });
            const parseRes = await response.json();
            // since verified it will come as true, res.json("this can return anything") 
            parseRes  === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
        }
        catch(error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        checkAuthenticated();
    }, [] );


        return (
            <Router>
                 
                        <Switch>
                            <Route exact path="/" render = {props => !isAuthenticated ? (<LoginScreen  {...props} setAuth = {setAuth} />) : (<Redirect to= "/Clients" />)  } />
                            <Route exact path="/Clients" render = {props => !isAuthenticated ? (<ClientSetup {...props} setAuth = {setAuth} />) : (<Redirect to= "/" />)  } />

                        </Switch>
                
            </Router>
        );
   
}

export default App;