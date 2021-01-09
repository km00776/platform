
import {Component} from  'react';
import ClientSetup from './components/ClientSetupScreen';
import AllocationScreen from './components/TestCodeAllocationScreen';
import LoginScreen from './components/LoginScreen';
import ContactForm from './components/ContactForm';
import ClientDetails from './components/ClientDetails';
import Routes from './components/Router'
import { BrowserRouter as Router } from 'react-router-dom';


export default class App extends Component {
        render() {
            return(  
            <Router >
               <Routes />
            </Router>
        
              

            )
        }
}