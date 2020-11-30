import { Fragment, useEffect, useState } from 'react';
import styles from '../styles/TestCodeStyle.module.scss';
import ToolBar from './ToolBar';
import Footer from './Footer';


const ClientSetup = () => {
    return(
        <Fragment>
        <ToolBar />
        <h1 className={styles.heading}>Clients</h1>
        <img className={styles.img} alt="hello" src="https://passwordplatform.englishlanguagetesting.co.uk/Images/Password-logo-bg.jpg" height="100" />

        <div className={styles.container2}>
            <label className={styles.space3} for="find">Find:</label>
            <input className={styles.search} id="find" name="find"></input>
        </div>
        <div className={styles.container}>
            <p className={styles.archived}>Is archived?</p>
            <div className={styles.checkbox}>
                <label className={styles.space} for="box1">All</label>
                <input className={styles.space} type="radio" id="box1" name="box1" value="All"></input>
                <label className={styles.space} for="box1">Yes</label>
                <input className={styles.space} type="radio" id="box1" name="box1" value="Yes"></input>
                <label className={styles.space} for="box1">No</label>
                <input className={styles.space} type="radio" id="box1" name="box1" value="No"></input>
            </div>
            <button className={styles.btn}>SEARCH</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       
        <br></br>
        <hr></hr>
        <table className={styles.clientsTable}>
        <thead className={styles.clientsTable}>
            <tr>
                <th className={styles.clientsTable}>Name</th>
                <th className={styles.clientsTable}>Archive</th>
         
            </tr>
        </thead>
        <tbody>
        {clients.map(client => (
        <tr className={styles.clientsTable} key={client.client_id}>
          <td className={styles.clientsTable}>{client.name}</td>
          <td className={styles.clientsTable}>Archived</td>
       
        </tr>
      ))}
        </tbody>
        </table>
        <Footer />
    </Fragment>

    );
}

export default ClientSetup;