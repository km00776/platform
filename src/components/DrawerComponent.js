

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
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 3,


  },
  icon: {
    minWidth: '30px',
    color: '#00324d'
  },

  nested: {
    paddingLeft: theme.spacing(4),
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#2E3B55',
    color: 'White',

  },

  content: {
    flexGrow: 1,
    backgroundColor: 'Red',
    color: '#2E3B55',
    padding: theme.spacing(3),

  },
}));




export function PermanentDrawerLeft() {

  const classes = useStyles();

  const [questionAuthoring, openQuestionAuthoring] = React.useState(false);
  const [testBuild, openTestBuild] = React.useState(false);
  const [reporting, openReporting] = React.useState(false);
  const [cms, openCMS] = React.useState(false);


  const handleQuestionAuthoringClick = () => {
    openQuestionAuthoring(!questionAuthoring);
  };
  const handleTestBuildClick = () => {
    openTestBuild(!testBuild);
  };
  const handleReportingClick = () => {
    openReporting(!reporting);
  };
  const handleCMSClick = () => {
    openCMS(!cms);
  };




  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar style={{ background: '#2E3B55',  }}>
        <Toolbar>
          <Box display='flex' flexGrow={1}>

          </Box>
          <div className={styles.mailIcon} >
            <ListItem button>
              <Badge badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
            </ListItem>
          </div>
          
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
          <ListItem button onClick={() => handleQuestionAuthoringClick()} key='Question Authoring'>
            <ListItemIcon style={{ color: 'White' }} >
              <ContactSupportIcon />
            </ListItemIcon>
            <ListItemText primary='Question Authoring'

            />
          </ListItem>
          <Collapse in={questionAuthoring} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Status" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={questionAuthoring} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Knowledge" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={questionAuthoring} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Reading" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={questionAuthoring} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Writing" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={questionAuthoring} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Listening" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={questionAuthoring} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Speaking" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={questionAuthoring} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Maths" />
              </ListItem>
            </List>
          </Collapse>
          <br></br>
          <ListItem button onClick={handleTestBuildClick} key='Test Build'>
            <ListItemIcon style={{ color: 'White' }}>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary='Test Build' />
          </ListItem>
          <Collapse in={testBuild} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Test Modules" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={testBuild} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Tests" />
              </ListItem>
            </List>
          </Collapse>
          <br></br>
          <ListItem button key='Client Setup'>
            <ListItemIcon style={{ color: 'White' }} >
              <GroupWorkIcon />
            </ListItemIcon>
            <ListItemText primary='Client Setup' />
          </ListItem>
          <br></br>
          <ListItem button key='Test Code Allocation'>
            <ListItemIcon style={{ color: 'White' }} >
              <SortByAlphaIcon />
            </ListItemIcon>
            <ListItemText primary='Test Code Allocation' />
          </ListItem>
          <br></br>
          <ListItem button key='Results & Certificates'>
            <ListItemIcon style={{ color: 'White' }} >
              <InsertDriveFileIcon />
            </ListItemIcon>
            <ListItemText primary='Results & Certificates' />
          </ListItem>
          <br></br>
          <ListItem button onClick={handleReportingClick} key='Reporting'>
            <ListItemIcon style={{ color: 'White' }} >
              <ReportIcon />
            </ListItemIcon>
            <ListItemText primary='Reporting' />
          </ListItem>
          <Collapse in={reporting} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Question Performance" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={reporting} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Pilot Question Performance" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={reporting} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Test Taker Performance Overview" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={reporting} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Test Taker Performance Detailed" />
              </ListItem>
            </List>
          </Collapse>
          <br></br>
          <ListItem button onClick={handleCMSClick} key='CMS'>
            <ListItemIcon style={{ color: 'White' }} >
              <StorageIcon />
            </ListItemIcon>
            <ListItemText primary='CMS' />
          </ListItem>
          <Collapse in={cms} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Question Layouts" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={cms} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Information Screens" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={cms} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Test Variants" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={cms} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Client Types" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={cms} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Administrators" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={cms} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Default Certificate" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={cms} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Results" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={cms} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Content Blocks" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={cms} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Auto Complete" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={cms} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Assign Marker" />
              </ListItem>
            </List>
          </Collapse>
          <br></br>
          <Divider />
          <ListItem button key='Inbox'>
            <ListItemIcon style={{ color: 'White' }} >
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary='Inbox' />
          </ListItem>
          <br></br>
          <ListItem button key='Notes'>
            <ListItemIcon style={{ color: 'White' }} >
              <NoteAddIcon />
            </ListItemIcon>
            <ListItemText primary='Notes' />
          </ListItem>
          <br></br>
          <ListItem button key='Invoices'>
            <ListItemIcon style={{ color: 'White' }} >
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary='Invoices' />
          </ListItem>
          <br></br>
          <Divider></Divider>
          <ListItem button key='Logout'>
            <ListItemIcon style={{ color: 'White' }} >
              <CancelPresentationIcon />
            </ListItemIcon>
            <ListItemText primary='Logout' />

          </ListItem>
        </List>


      </Drawer>

    </div>

  );
}