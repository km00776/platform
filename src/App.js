
import {Component} from  'react';
import LoginScreen from './components/LoginScreen';
import './index.css';


export default class App extends Component {
        render() {
            return(  
            <div className= "mainColor">
                <LoginScreen />
            </div>
            )
        }
}