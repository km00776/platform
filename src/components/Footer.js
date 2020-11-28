import styles from '../styles/Footer.module.scss';

const Footer = () => {
    return(
    <div className={styles.container}>
       <p className={styles.license}> © 2014 – 2020 English Language Testing Ltd <span className={styles.log}>| Logout</span></p>
      </div>
      
    );
}

export default Footer;