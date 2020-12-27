

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {
    
    ThemeProvider,
 
    createMuiTheme,
  } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  
  drawer: {
    width: drawerWidth,
    flexShrink: 3,
    
   
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#0b3352',
    color: 'White'
  },

  content: {
    flexGrow: 1,
    backgroundColor:  'Red' ,
    color: '#00324d',
    padding: theme.spacing(3),
  
  },
}));

const style = {

    background : 'red'
};


export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar style={{ background: '#3f6d91' }} position="static">
        <Toolbar className={style}>
          
        </Toolbar>
      </AppBar>
     
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        color="primary"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Question Authoring', 'Test Build', 'Client Setup', 'Test Code Allocation', 'Results & Certificates', 'Reporting', 'CMS'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        
       
      </Drawer>
     
    </div>
  );
}