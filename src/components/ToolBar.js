import styles from '../styles/Toolbar.module.scss';

const ToolBar = () => {
    return(
    <div>
        <button className={styles.t}>QUESTION AUTHORING</button>
        <button className={styles.t}>TEST BUILD</button>
        <button className={styles.t}>CLIENT SETUP</button>
        <button className={styles.t}>TEST CODE ALLOCATION</button>
        <button className={styles.t}>RESULTS & CERTIFICATES</button>
        <button className={styles.t}>REPORTING</button>
        <button className={styles.t}>CMS</button>
        <button className={styles.t}>LOGOUT</button>
    </div>
    );
}

export default ToolBar;