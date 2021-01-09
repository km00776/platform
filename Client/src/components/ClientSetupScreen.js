import { Fragment, useEffect, useState } from 'react';
import styles from '../styles/ClientSetup.module.scss';
import ToolBar from './ToolBar';
import Footer from './Footer';
import { PermanentDrawerLeft } from './DrawerComponent';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { SimplePaper, SimplePaper2, SimplePaper3 } from './Cards';
import BasicTable from './tableClients';

const ClientSetup = (props) => {

    const theme = createMuiTheme();

    theme.typography.h5 = {
        fontSize: '2rem',
        '@media (min-width:600px)': {
            fontSize: '1rem',
        },
        typography: {
            fontFamily: 'sans-serif',
            fontWeight: 600,
        },

        [theme.breakpoints.up('md')]: {
            fontSize: '3rem',
            fontWeight: 500,
        },
    };


    return (
        <div className={styles.class}>
            <PermanentDrawerLeft />
        <div className={styles.fullContainer}> 
            <div className={styles.clientsHeading}>
                <ThemeProvider theme={theme}>
                    <Typography variant="h5">
                        Clients
                    </Typography>
                </ThemeProvider>
                
            </div>
            <div className={styles.clientsData}>
                <SimplePaper /> 
            </div>
        </div>
            <div className={styles.clientsData2}>
                <SimplePaper2 />
            </div>
             <div className={styles.clientsDatabase}>
                <SimplePaper3  />
            </div> 
            
            <Footer />
        </div>

    );
}

export default ClientSetup;