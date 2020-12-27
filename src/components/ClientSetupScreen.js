import { Fragment, useEffect, useState } from 'react';
import styles from '../styles/ClientSetup.module.scss';
import ToolBar from './ToolBar';
import Footer from './Footer';
import {PermanentDrawerLeft} from './DrawerComponent';



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
    <div className={styles.class}> 
            <PermanentDrawerLeft />
            </div>
    );
}

export default ClientSetup;