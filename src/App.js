
import {Component} from  'react';
import ClientSetup from './components/ClientSetupScreen';
import AllocationScreen from './components/TestCodeAllocationScreen';
import LoginScreen from './components/LoginScreen';
import ContactForm from './components/ContactForm';



export default class App extends Component {
        render() {
            return(  
            <div>
              <ClientSetup   />
              

            </div>
            )
        }
}