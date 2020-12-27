

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
import styles from '../styles/ClientSetup.module.scss';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import ReportIcon from '@material-ui/icons/Report';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import StorageIcon from '@material-ui/icons/Storage';
import ReceiptIcon from '@material-ui/icons/Receipt';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import BuildIcon from '@material-ui/icons/Build';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import MuiAppbar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 3,


  },

  nested: {
    paddingLeft: theme.spacing(4),
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#00224b',
    color: 'White',

  },

  content: {
    flexGrow: 1,
    backgroundColor: 'Red',
    color: '#00324d',
    padding: theme.spacing(3),

  },
}));




export function PermanentDrawerLeft() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };


  return (


    <div className={classes.root}>
      <CssBaseline />
      <AppBar />

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
          <ListItem button key='Question Authoring'>
            <ListItemText primary='Question Authoring' />
            <ContactSupportIcon />
          </ListItem>
          <br></br>
          <ListItem button onClick={handleClick} key='Test Build'>
            <ListItemText primary='Test Build' />
            <BuildIcon />
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
          <br></br>
          <ListItem button key='Client Setup'>
            <ListItemText primary='Client Setup' />
            <GroupWorkIcon />
          </ListItem>
          <br></br>
          <ListItem button key='Test Code Allocation'>
            <ListItemText primary='Test Code Allocation' />
            <SortByAlphaIcon />
          </ListItem>
          <br></br>
          <ListItem button key='Results & Certificates'>
            <ListItemText primary='Results & Certificates' />
            <InsertDriveFileIcon />
          </ListItem>
          <br></br>
          <ListItem button key='Reporting'>
            <ListItemText primary='Reporting' />
            <ReportIcon />
          </ListItem>
          <br></br>
          <ListItem button key='CMS'>
            <ListItemText primary='CMS' />
            <StorageIcon />
          </ListItem>
          <br></br>
          <Divider />
          <ListItem button key='Inbox'>
            <ListItemText primary='Inbox' />
            <MailIcon />
          </ListItem>
          <br></br>
          <ListItem button key='Notes'>
            <ListItemText primary='Notes' />
            <NoteAddIcon />
          </ListItem>
          <br></br>
          <ListItem button key='Invoices'>
            <ListItemText primary='Invoices' />
            <ReceiptIcon />
          </ListItem>
          <br></br>
          <Divider></Divider>
          <ListItem button key='Logout'>
            <ListItemText primary='Logout' />
            <CancelPresentationIcon />
          </ListItem>
        </List>


      </Drawer>

    </div>

  );
}