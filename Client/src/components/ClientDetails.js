import styles from '../styles/ClientDetails.module.scss';
import { PermanentDrawerLeft } from './DrawerComponent';
import {ContactFormContainer} from './Cards';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {useState } from 'react';




const ClientDetails = () => {
    const [Name, setName] = useState("");
    const [Type, setType] = useState("");
    const [Email, setEmail] = useState("");
    const [SecondEmail, setSecondEmail] = useState("");
    const [Address, setAddress] = useState("");
    const [Country, setCountry] = useState("");



  const theme = createMuiTheme();

  theme.typography.h5 = {
      fontSize: '2rem',
      '@media (min-width:600px)': {
          fontSize: '1rem',
      },
      typography: {
          fontFamily: 'sans-serif',
          fontWeight: 900,
          color: '#2e3b55'
      },

      [theme.breakpoints.up('md')]: {
          fontSize: '3rem',
          fontWeight: 400,
          color: '#2e3b55'
      },
  };
    return (
      <div className={styles.background}>
          <PermanentDrawerLeft />
          <div className={styles.Heading}> 
              <ThemeProvider theme={theme}>
                    <Typography variant="h4">
                        Client Details
                    </Typography>
                </ThemeProvider>
                
          </div>
          <div className={styles.container}>
                  <ContactFormContainer/>
        </div>
      
         
      </div>
    )

}

export default ClientDetails;