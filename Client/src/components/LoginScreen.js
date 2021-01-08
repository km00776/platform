

import styles from '../styles/App.module.scss';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import DisableElevation from './PersonalButton';
import history from './History';

const LoginScreen = () => {
    const [visiblility, setVisiblility] = useState(false);

    function handleClick(visiblility) {
        if (visiblility === false) {
            setVisiblility(true);
            console.log("hello");
        }
        else {
            setVisiblility(false);
            console.log("bye");
        }
    }


    return (
        <Fragment>
            <body id="LoginScreen">
                <div>
                    <header>
                        <h1 className={styles.heading}>PASSWORD | <span className={styles.h1heading}>PLATFORM</span></h1>
                        <img className={styles.image} alt="nothing" src="https://www.englishlanguagetesting.co.uk/wp-content/uploads/2018/04/Password_CMYKxxxhdpi.png" height="200"></img>
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
                            <div className={styles.Password}>
                                <label className={styles.Label}><i class="info circle icon"></i>Password</label>
                                <br></br>
                                <input type="password" className={styles.Input}></input>
                            </div>
                        </div>
                        <div className={styles.b1}>
                            <form>
                                <DisableElevation onClick={() => history.push('/ClientDetails')}className={styles.loginButton} label="Login"></DisableElevation>
                                <DisableElevation className={styles.testsRemainingButton} label="Check Tests Remaining"></DisableElevation>
                            </form>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Terms />
                    </div>
                </div>

                <ContactForm onClick={() => handleClick(visiblility)} visiblility={visiblility} />
            </body>
        </Fragment>

    );


}



const Terms = () => {
    return (

        <div className={styles.termsContainer}>
            <span className={styles.info}>
                <input className={styles.termsBox} type="checkbox" id="box1" name="box1" value="All">
                </input>
                <i class="exclamation circle icon"></i>
                <a className={styles.link} target="_blank" href="https://alpha.englishlanguagetesting.co.uk/terms-and-conditions-for-a-password-test/">English Language Testing Ltd’s terms and conditions for taking a Password test</a>
            </span>
            <br></br>
            <br></br>
            <p className={styles.termsMessage}>Any test taker that fails to agree to abide by these terms and conditions will not be allowed to take a Password test and subsequently should they fail to abide by them may not receive a Password test result from English Language Testing Ltd (ELT), may have their result cancelled, may be reported to regulatory authorities globally and may be liable to legal action and/ or prosecution.</p>
        </div>)
}










export default LoginScreen;