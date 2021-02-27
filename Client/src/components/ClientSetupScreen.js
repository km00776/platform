import { Fragment, useEffect, useState } from 'react';
import styles from '../styles/ClientSetup.module.scss';
import ToolBar from './ToolBar';
import Footer from './Footer';
import { PermanentDrawerLeft } from './DrawerComponent';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { SimplePaper, SimplePaper2, SimplePaper3 } from './Cards';
import BasicTable from './tableClients';
import StickyHeadTable from './tableClients';
import {ContainedButtons} from './reuseableButton';
import Paper from '@material-ui/core/Paper';



const useStyles3 = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            [theme.breakpoints.down('md')]: {
                width: theme.spacing(10),
                height: theme.spacing(40),
                margin: theme.spacing(3),
            },
            [theme.breakpoints.only('lg')]: {
                width: theme.spacing(135.8),
                height: theme.spacing(60),
                margin: theme.spacing(1),
                position: 'relative'
            },
            [theme.breakpoints.only('xl')]: {
                width: theme.spacing(169),
                height: theme.spacing(69),
                position: 'relative'
            },

        },
    },

}));

const ClientSetup = (props) => {
    const classes3 = useStyles3();
    const theme = createMuiTheme();
  
    theme.typography.h5 = {
        fontSize: '2rem',
        '@media (min-width:600px)': {
            fontSize: '1rem',
            color: 'Black'
        },
        typography: {
            
            fontWeight: 800,
        },

        [theme.breakpoints.up('lg')]: {
            fontSize: '3.2rem',
            fontWeight: 550,
            fontFamily: 'Lato,sans-serif',
            color: 'Black'
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
                <div className={classes3.root}>
                    <Paper style={{ backgroundColor: 'white' }} elevation={7}>
                        <StickyHeadTable />
                        <div className={styles.Pagination}>
                            <form>
                                <ContainedButtons onClick={() => props.history.push('/Detail')} className={styles.addBtn} label="ADD NEW" />
                            </form>
                        </div>
                    </Paper>
                </div>
            </div>

            <Footer />
        </div>

    );
}

export default ClientSetup;