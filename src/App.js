
import {Component} from  'react';
import LoginScreen from './components/LoginScreen';
import QuestionAuthoringScreen from './components/QuestionAuthoringScreen';
import AllocationScreen from './components/TestCodeAllocationScreen';


export default class App extends Component {
        render() {
            return(  
            <div>
                {/* <LoginScreen /> */}
                {/* <QuestionAuthoringScreen /> */}
               <AllocationScreen />

            </div>
            )
        }
}