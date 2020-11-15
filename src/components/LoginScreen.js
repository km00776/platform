import PersonalButton from './PersonalButton';
import '../index.scss';
import styles from '../App.module.scss';

const LoginScreen = () => {
    return(
    <div>
        <h2 className={styles.intro}>Please Login</h2>
       <div className={styles.big2}><PersonalButton label="check tests remaining"></PersonalButton></div>
       <div className={styles.big}><PersonalButton label="Login"></PersonalButton></div> 
    <div className={styles.container}>
       <p className="text">Login:</p>
       <p className="text">Password:</p>
    </div>
    </div>
    );
    
}



export default LoginScreen;