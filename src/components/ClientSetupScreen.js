import { Fragment, useEffect, useState } from 'react';
import styles from '../styles/ClientSetup.module.scss';
import ToolBar from './ToolBar';
import Footer from './Footer';


const ClientSetup = () => {
    return (

        <div>
            <ToolBar />
            <header>
                <h1 className={styles.heading}>Clients</h1>
                <img className={styles.passwordLogo} alt="hello" src="https://passwordplatform.englishlanguagetesting.co.uk/Images/Password-logo-bg.jpg" height="100" />
            </header>
            <div className={styles.container}>
                <div className={styles.leftside}>
                    <div className={styles.find}>
                        <label className={styles.findLabel} for="find">Find</label>
                        <input className={styles.findInput} id="find" name="find"></input>
                    </div>
                    <div className={styles.type}>
                        <label className={styles.typeLabel} for="type">Type</label>
                        <select className={styles.typeInput} id="type" name="type">
                            <option value="All">All</option>
                            <option value="TestCentre">Test Centre</option>
                            <option value="University">University</option>
                        </select>
                    </div>
                    <body>
                    {/* <div className={styles.checkbox}>
                        <p className={styles.Active}>Is Archived?</p>
                            <label className={styles.space} for="box1">All</label>
                            <input className={styles.space} type="radio" id="box1" name="box1" value="All"></input>
                            <label className={styles.space} for="box1">Yes</label>
                            <input className={styles.space} type="radio" id="box1" name="box1" value="Yes"></input>
                            <label className={styles.space} for="box1">No</label>
                            <input className={styles.space} type="radio" id="box1" name="box1" value="No"></input>
                    </div> */}
                    </body>
                </div>
                <div className={styles.rightside}>

                </div>
            </div>
            <Footer />
        </div>

    );
}

export default ClientSetup;