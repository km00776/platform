import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import styles from '../styles/ClientSetup.module.scss';
import SchoolIcon from '@material-ui/icons/School';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Divider from '@material-ui/core/Divider';
import BasicTable from './tableClients';
import ContainedButtons from './reuseableButton';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      [theme.breakpoints.down('md')]: {
        width: theme.spacing(30),
        height: theme.spacing(40),
        margin: theme.spacing(3),
      },
      [theme.breakpoints.only('lg')]: {
        width: theme.spacing(50),
        height: theme.spacing(20),
        margin: theme.spacing(1),
        position: 'relative',
      },
      // this is for 1920 x 1080
      [theme.breakpoints.up('xl')]: {
        width: theme.spacing(60),
        height: theme.spacing(20),
        margin: theme.spacing(1),
        position: 'relative',
        
        

      },
     
    

    },
  },

}));

const useStyles2 = makeStyles((theme) => ({
  root1: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      
      [theme.breakpoints.down('md')]: {
        width: theme.spacing(138),
        height: theme.spacing(40),
        margin: theme.spacing(3),
      },
      [theme.breakpoints.down('xl')]: {
        width: theme.spacing(184),
        height: theme.spacing(80),
      
        marginLeft: theme.spacing(9)
      },
     position: 'absolute'
    

    },
    
  },

}));
const useStyles3 = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(138),
      height: theme.spacing(60),
      position: 'absolute'
    },
  },

}));

const useStyles4 = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export function BasicPagination() {
  const classes4 = useStyles4();
  return (
    <div className={classes4.root}>

      <Pagination count={10} color="primary" />


    </div>
  );
}



export function SimplePaper() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper  style={{ backgroundColor: 'white' }} elevation={4}>
        {/* <h2 className={styles.papertext}>Total Clients</h2> */}
      </Paper>
      <Paper  style={{ backgroundColor: 'white' }} elevation={4}>
        {/* <h2 className={styles.papertext}>Total Clients</h2> */}
      </Paper>
      <Paper  style={{ backgroundColor: 'white' }} elevation={4}>
        {/* <h2 className={styles.papertext}>Total Clients</h2> */}
      </Paper>
    </div>

  );
}

export function SimplePaper2() {
  const classes2 = useStyles2();

  return (
    <div className={classes2.root1}>

      <Paper style={{ backgroundColor: 'white' }} elevation={4}>
        {/* <ContainedButtons /> */}
      </Paper>



    </div>
  );
}

export function SimplePaper3() {
  const classes3 = useStyles3();

  return (
    <div className={classes3.root}>

      <Paper style={{ backgroundColor: '#2E3B55' }} elevation={6}>
        {/* <BasicTable/> */}
        <div className={styles.Pagination}>

          <BasicPagination />
        </div>
      </Paper>



    </div>
  );
}