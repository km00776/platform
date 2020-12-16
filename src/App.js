
import {Component} from  'react';
import ClientSetup from './components/ClientSetupScreen';
import AllocationScreen from './components/TestCodeAllocationScreen';
import LoginScreen from './components/LoginScreen';



export default class App extends Component {
        render() {
            return(  
            <div>
              <AllocationScreen />
              

            </div>
            )
        }
}