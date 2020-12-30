import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';

import styles from '../styles/ClientSetup.module.scss';
import SchoolIcon from '@material-ui/icons/School';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Divider from '@material-ui/core/Divider';
import BasicTable from './tableClients';
import ContainedButtons from './reuseableButton';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import EqualizerIcon from '@material-ui/icons/Equalizer';

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
      // this is for my mac 1440 x 900p
      [theme.breakpoints.only('lg')]: {
        width: theme.spacing(44),
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
        height: theme.spacing(30),
        margin: theme.spacing(1),
        position: 'relative'
      },
      [theme.breakpoints.only('xl')]: {
        width: theme.spacing(183.8),
        height: theme.spacing(40),
        position: 'relative'
      },

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
      <Paper style={{ backgroundColor: 'white' }} elevation={4}>
        <EqualizerIcon style={{ fontSize: 70, color: '#66bb6a' }} />
        <h2 className={styles.papertext}></h2>
        {/* <Divider />
        <h3 className={styles.totalClients}>80</h3> */}
      </Paper>
      <Paper style={{ backgroundColor: 'white' }} elevation={4}>
        <ImportContactsIcon style={{ fontSize: 60, color: '#536dfe' }} />
        {/* <h2 className={styles.papertext2}>Total University</h2> */}
        {/* <Divider />
        <h3 className={styles.totalUniversityClients}>80</h3> */}
      </Paper>
      <Paper style={{ backgroundColor: 'white' }} elevation={4}>
        <SchoolIcon style={{ fontSize: 60, color: '#ec407a' }} />
        {/* <h2 className={styles.papertext3}>Total School</h2>
        <Divider />
        <h3 className={styles.totalSchoolClients}>80</h3> */}
      </Paper>
    </div>

  );
}

export function SimplePaper2() {
  const classes2 = useStyles2();

  return (
    <div className={classes2.root}>
      <Paper style={{ backgroundColor: 'white' }} elevation={4}>
         <div className={styles.leftContainer}>
          <div className={styles.find}>
            <div className={styles.labelFind}>
                <label>Find</label>
            </div>
            <div className={styles.inputFind}>
                <input></input>
            </div>
            </div>
            <div className={styles.name}>
            <div className={styles.labelName}>
                <label>Name</label>
            </div>
            <div className={styles.inputName}>
                <input></input>
            </div>
            </div>
            <div className={styles.active}>
              <div className={styles.labelActive}>
                <label>Active</label>
              </div>
              <div classname={styles.inputActive}>
              <select>
              <option value="0">All</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
              </select>
              </div>
            
            </div>
         </div>
        <div>

          </div>
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