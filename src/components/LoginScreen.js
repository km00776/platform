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
                    <h2 className={styles.message}>
                    <i class="lock icon"></i> LOGIN
                    </h2>
                    <div className={styles.inputBox}>
                        <div className={styles.login}>
                            <label className={styles.Label}><i class="info circle icon"></i>Login</label>
                            <br></br>
                            <input className={styles.Input}></input>
                        </div>
                        <br></br>
                        <div className={styles.remaining}>
                            <label className={styles.Label}><i class="info circle icon"></i>Password</label>
                            <br></br>
                            <input className={styles.Input}></input>
                        </div>
                    </div>
                    <div className={styles.b1}>
                    <PersonalButton className={styles.loginButton} label="Login"></PersonalButton> 
                    <PersonalButton className={styles.testsRemainingButton} label="Check tests remaining"></PersonalButton>
                </div>

                    
                
                </div>
            </div>
        </Fragment>
    );

}



export default LoginScreen;