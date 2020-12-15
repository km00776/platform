import PersonalButton from './PersonalButton';
import '../index.scss';
import styles from '../styles/App.module.scss';
import { Fragment } from 'react';

const LoginScreen = () => {
    return (
        <Fragment>
            <div>
                <header>
                    <h1 className={styles.heading}>PASSWORD | <span className={styles.h1heading}>PLATFORM</span></h1>
                </header>
                <div className={styles.container}>
                    {/* <h2 className={styles.message}>
                        PLEASE LOGIN
                    </h2> */}
                    <div className={styles.inputBox}>
                        
                        <div className={styles.login}>
                            <label className={styles.Label}>Login</label>
                            <br></br>
                            <input className={styles.Input}></input>
                        </div>
                        <br></br>
                        <div className={styles.remaining}>
                            <label className={styles.Label}>Password</label>
                            <br></br>
                            <input className={styles.Input}></input>
                        </div>
                    </div>
                    <div className={styles.b1}>
                    <PersonalButton className={styles.loginButton} label="Login"></PersonalButton> 
                    <PersonalButton className={styles.testsRemainingButton} label="Check tests remaining"></PersonalButton>
                </div>

                    {/* <img className={styles.img} alt="hello" src="https://passwordplatform.englishlanguagetesting.co.uk/Images/Password-logo-bg.jpg" height="200"/>
                <div className={styles.intro}><h2 className={styles.font}>Please Login</h2></div>
                <div className={styles.textContainer}>
                    <p className={styles.placeholder}>Login:<input placeholder='Login' className={styles.loginInput}></input></p>
                    <p className={styles.placeholder}>Password:<input placeholder='Password' type='password' className={styles.passwordInput}></input></p> 
                </div>
                <PersonalButton className={styles.testsRemainingButton} label="Check tests remaining"></PersonalButton>
                <PersonalButton className={styles.loginButton} label="Login"></PersonalButton> */}
                </div>
            </div>
        </Fragment>
    );

}



export default LoginScreen;