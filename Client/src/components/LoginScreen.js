

import styles from '../styles/App.module.scss';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import DisableElevation from './PersonalButton';
import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";

import { toast } from "react-toastify";

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visiblility: false,
            login: "",
            password: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleOnChangeLogin = this.handleOnChangeLogin.bind(this);
        this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }   
    // const [visiblility, setVisiblility] = useState(false);

    handleOnChangeLogin(e) {
      
        this.setState({login: e.target.value });
    }

     onSubmit = async (e) =>  {
        e.preventDefault();
        const {login, password} = this.state;
        try {
            const body = {login, password}
            const response = await fetch("/auth/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(body)
            }
            );  

            const parseRes = await response.json(); 

            if(parseRes.jwtToken) {
                localStorage.setItem("token", parseRes.jwtToken);
                this.props.setAuth(true);
                toast.success("Logged In Successfully");
            } else {
                this.props.setAuth(false);  
                toast.error(parseRes);
            }
        }
        catch(error) {
            console.error(error.message)
        }
    }

    handleOnChangePassword(e) {

        this.setState({password: e.target.value})
    }

     handleClick() {
        if (this.state.visiblility === false) {
             this.setState({
                visiblility: true
            })
            console.log("hello");
        }
        else {
            this.setState({
                visiblility: false
            })
            console.log("bye");
        }
    }

render () {
    return (
        <Fragment>
            <body id="LoginScreen">
                <form onSubmit= {this.onSubmit}>
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
                                <input onChange= {this.handleOnChangeLogin} value={this.state.login}  type="text" name= "login"className={styles.Input}></input>
                            </div>
                            <br></br>
                            <div className={styles.Password}>
                                <label className={styles.Label}><i class="info circle icon"></i>Password</label>
                                <br></br>
                                <input name="password" onChange={this.handleOnChangePassword} value = {this.state.password} type="password" className={styles.Input}></input>
                            </div>
                        </div>
                        <div className={styles.b1}>
                  

                                <DisableElevation type= "submit" className={styles.loginButton} label="Login"></DisableElevation> 
                                <DisableElevation className={styles.testsRemainingButton} label="Check Tests Remaining"></DisableElevation>
                           
                        </div>
                       
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Terms />
                    </div>
                </form>

                <ContactForm onClick={this.handleClick} visiblility={this.state.visiblility} />
            </body>
        </Fragment>

    );

    }
}



const Terms = () => {
    return (

        <div className={styles.termsContainer}>
            <br></br>
            <span className={styles.info}>
                <input className={styles.termsBox} required type="checkbox" id="box1" name="box1" value="All">
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