
import {Component} from  'react';
import ClientSetup from './components/ClientSetupScreen';
import LoginScreen from './components/LoginScreen';
import ClientDetails from './components/sidepages/ClientDetails';
import AllocationScreen from './components/TestCodeAllocationScreen';


export default class App extends Component {
        render() {
            return(  
            <div>
              <ClientDetails />
              

            </div>
            )
        }
}