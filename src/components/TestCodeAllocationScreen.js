import { Fragment } from 'react';
import styles from '../styles/TestCodeStyle.module.scss';
import ToolBar from './ToolBar';


const AllocationScreen = () => {
    return (
        <Fragment>
          
            <h1 className={styles.heading}>Clients</h1>
            <div className={styles.container2}>
                <label className={styles.space3} for="find">Find:</label>
                <input className={styles.search} id="find" name="find"></input>
            </div>
            <div className={styles.container}>
                <p className={styles.archived}>Is archived</p>
                <div className={styles.test}>
                    <label className={styles.space} for="box1">All</label>
                    <input className={styles.space} type="radio" id="box1" name="box1" value="All"></input>
                    <label className={styles.space} for="box1">Yes</label>
                    <input className={styles.space} type="radio" id="box1" name="box1" value="Yes"></input>
                    <label className={styles.space} for="box1">No</label>
                    <input className={styles.space} type="radio" id="box1" name="box1" value="No"></input>
                </div>
                <button className={styles.btn}>SEARCH</button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr />
            
        </Fragment>
        
        )
}

export default AllocationScreen