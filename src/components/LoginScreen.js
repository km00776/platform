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

                    <img className={styles.img} alt="hello" src="https://cdn.sanity.io/images/0b678gck/buoy-public-site/24f1ea58017f046d2dacdf37eff31e97830efd32-2000x1400.png" height="140"/>
                
                </div>
            </div>
        </Fragment>
    );

}



export default LoginScreen;