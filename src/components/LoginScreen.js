import PersonalButton from './PersonalButton';
import '../index.scss';
import styles from '../App.module.scss';
import { Fragment } from 'react';

const LoginScreen = () => {
    return (
        <Fragment>
            <div className={styles.container}>
                <img className={styles.img} alt="hello" src="https://passwordplatform.englishlanguagetesting.co.uk/Images/Password-logo-bg.jpg" height="200"/>
                <div className={styles.intro}><h2 className={styles.font}>Please Login</h2></div>
                <div className={styles.textContainer}>
                    <p className={styles.placeholder}>Login:<input className={styles.loginInput}></input></p>
                    <p className={styles.placeholder}>Password:<input className={styles.passwordInput}></input></p> 
                </div>
                <div className={styles.testsRemainingButton}><PersonalButton label="Check tests remaining"></PersonalButton></div>
                <div className={styles.loginButton}><PersonalButton label="Login"></PersonalButton></div>
             
            </div>
          
        </Fragment>
    );

}



export default LoginScreen;