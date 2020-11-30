
import {Component} from  'react';
import ClientSetup from './components/ClientSetupScreen';
import LoginScreen from './components/LoginScreen';

import AllocationScreen from './components/TestCodeAllocationScreen';


export default class App extends Component {
        render() {
            return(  
            <div>
              <ClientSetup />
              

            </div>
            )
        }
}