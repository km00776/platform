import PersonalButton from './PersonalButton';
import '../index.scss';
import styles from '../App.module.scss';
import {Fragment} from 'react';

const LoginScreen = () => {
    return(
    <Fragment>
        <div className={styles.container}>
        <div className={styles.big2}><PersonalButton className={styles.big2} label="Login"></PersonalButton></div>


        </div>
        {/* <h2 className={styles.intro}>Please Login</h2>
        <img style={styles.img} src="https://www.englishlanguagetesting.co.uk/wp-content/uploads/2018/04/Password_CMYKxxxhdpi.png" height="200"/>
       <div className={styles.big2}><PersonalButton label="check tests remaining"></PersonalButton></div>
       <div className={styles.big}><PersonalButton label="Login"></PersonalButton></div> 
    <div className={styles.container}>
       <p className={styles.text}>Login: <input></input></p> 
       <p className={styles.text}>Password: <input></input> </p>

       
    </div> */}
    </Fragment>
    );
    
}



export default LoginScreen;