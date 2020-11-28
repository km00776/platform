import PersonalButton from './PersonalButton';
import '../index.scss';
import styles from '../styles/App.module.scss';
import { Fragment } from 'react';

const LoginScreen = () => {
    return (
        <Fragment>
            <div className={styles.container}>
                <img className={styles.img} alt="hello" src="https://passwordplatform.englishlanguagetesting.co.uk/Images/Password-logo-bg.jpg" height="200"/>
                <div className={styles.intro}><h2 className={styles.font}>Please Login</h2></div>
                <div className={styles.textContainer}>
                    <p className={styles.placeholder}>Login:<input placeholder='Login' className={styles.loginInput}></input></p>
                    <p className={styles.placeholder}>Password:<input placeholder='Password' type='password' className={styles.passwordInput}></input></p> 
                </div>
                <PersonalButton className={styles.testsRemainingButton} label="Check tests remaining"></PersonalButton>
                <PersonalButton className={styles.loginButton} label="Login"></PersonalButton>
            </div>
          
        </Fragment>
    );

}



export default LoginScreen;