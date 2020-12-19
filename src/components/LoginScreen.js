import PersonalButton from './PersonalButton';
import '../index.scss';
import styles from '../styles/App.module.scss';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';


const LoginScreen = () => {
    const [container, setContainer] = useState(false);

    function handleClick(){
        setContainer(true);
     }

    return (
        <Fragment>
            <div>
                <header>
                    <h1 className={styles.heading}>PASSWORD | <span className={styles.h1heading}>PLATFORM</span></h1>

                </header>
                <div className={styles.container}>
                    {/* <img className={styles.image} src="https://i.imgur.com/KXK11hV.png" height="100"></img> */}
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
                        <PersonalButton className={styles.loginButton} label="Login"></PersonalButton>
                        <PersonalButton className={styles.testsRemainingButton} label="Check tests remaining"></PersonalButton>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Terms />
                </div>
            </div>
           <button onClick={handleClick}>
               
           </button>
            
        </Fragment>

    );


    }

    function isButtonClicked(e) {
        e.preventDefault();

        if(document.getElementById('button').clicked === true) {
            return(
            true,
            <SupportForm />

            );
        }
        else {
            return(false, <SupportButton />);
        }
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
            <p>Any test taker that fails to agree to abide by these terms and conditions will not be allowed to take a Password test and subsequently should they fail to abide by them may not receive a Password test result from English Language Testing Ltd (ELT), may have their result cancelled, may be reported to regulatory authorities globally and may be liable to legal action and/ or prosecution.</p>
        </div>)
}

const SupportButton = () => {
    return (
       <button>
            <div className={styles.support}>
            </div>
        </button>
   );
}

const SupportForm = () => {
    return (
    <div className={styles.formContainer}>
        Testing
    </div>)
}







export default LoginScreen;