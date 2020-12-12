import { Fragment, useEffect, useState } from 'react';
import styles from '../styles/ClientSetup.module.scss';
import ToolBar from './ToolBar';
import Footer from './Footer';


const ClientSetup = () => {
    const [clients, setClients] = useState([]);

    const getClients = async () => {
        try {
            const response = await fetch("http://localhost:3001");
            const jsonData = await response.json();

            setClients(jsonData);
        }
        catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getClients();
    }, [])


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
                    <div className={styles.ActiveContainer}>
                        <p className={styles.Active}>Active</p>
                        <div className={styles.ActiveCheckbox}>
                            <label className={styles.activetickbox} for="box1">All</label>
                            <input className={styles.activetickbox} type="radio" id="box1" name="box1" value="All"></input>
                            <label className={styles.activetickbox} for="box1">Yes</label>
                            <input className={styles.activetickbox} type="radio" id="box1" name="box1" value="Yes"></input>
                            <label className={styles.activetickbox} for="box1">No</label>
                            <input className={styles.activetickbox} type="radio" id="box1" name="box1" value="No"></input>
                        </div>
                    </div>
                </div>
                <div className={styles.rightside}>
                    <div className={styles.name}>
                        <label className={styles.nameLabel} for="name">Name</label>
                        <input className={styles.nameInput} id="name" name="name"></input>
                    </div>
                    <div className={styles.Country}>
                        <label className={styles.countryLabel} for="name">Country</label>
                        <input className={styles.countryInput} id="name" name="name"></input>
                    </div>
                    <div className={styles.calender}>
                        <p className={styles.dateCreated}>Date Created</p>
                        <input className={styles.dateFrom}></input>
                        <input className={styles.dateTo}></input>
                    </div>
                    <div className={styles.ArchivedContainer}>
                        <p className={styles.Archived}>Is Archived</p>
                        <div className={styles.ArchivedCheckbox}>
                            <label className={styles.archivedtickbox} for="box1">All</label>
                            <input className={styles.archivedtickbox} type="radio" id="box1" name="box1" value="All"></input>
                            <label className={styles.archivedtickbox} for="box2">Yes</label>
                            <input className={styles.archivedtickbox} type="radio" id="box1" name="box2" value="Yes"></input>
                            <label className={styles.archivedtickbox} for="box3">No</label>
                            <input className={styles.archivedtickbox} type="radio" id="box1" name="box3" value="No"></input>
                        </div>
                    </div>
                    <div className={styles.queryContainer}>
                        <button className={styles.searchBtn}>SEARCH</button>
                        <button className={styles.clearBtn}>CLEAR</button>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

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
                <br></br>
                <hr></hr>
                <table className={styles.clientsTable}>
                    <thead className={styles.clientsTable}>
                        <tr>
                            <th className={styles.clientsTable}>Name</th>
                            <th className={styles.clientsTable}>Country</th>
                            <th className={styles.clientsTable}>Date Created</th>
                            <th className={styles.clientsTable}>Active</th>
                            <th className={styles.clientsTable}>Archive</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map(client => (
                            <tr className={styles.clientsTable} key={client.client_id}>
                                <td className={styles.clientsTable}><a href="">{client.name}</a></td>
                                <td className={styles.clientsTable}><a href="www.google.co.uk">{client.country}</a></td>
                        <td className={styles.clientsTable}><a href="www.google.co.uk">{client.datecreated}</a></td>
                                <td className={styles.clientsTable}><a href="www.google.co.uk">{client.Active}</a></td>
                                <td className={styles.clientsTable}><a href="www.google.co.uk">Archived</a></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br>
                <div>
                    <button className={styles.newClientBtn}>ADD NEW</button>
                </div>
            </div>

            <Footer />
        </div>

    );
}

export default ClientSetup;