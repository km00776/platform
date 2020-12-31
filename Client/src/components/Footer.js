import styles from '../styles/Footer.module.scss';
import Typography from '@material-ui/core/Typography';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';


const Footer = () => {
    return(
    <div className={styles.footer}>
 
      <Typography className={styles.license} variant="h6" component="h6">
        © 2014 – 2020 English Language Testing Ltd
      </Typography>
    
    </div>
      
    );
}

export default Footer;