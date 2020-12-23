

import styles from '../styles/ContactForm.module.scss';

const ContactForm = (props) => {

    return (
        // if true render supportForm otherwise, render the button
        <div>{props.visiblility ? <SupportForm onClick={props.onClick} /> : <SupportButton onClick={props.onClick} />}</div>

    );
}
const SupportButton = (props) => {
    return (
        <button onClick={props.onClick} className={styles.support}>
            <p className={styles.supportText}><i class="chevron circle up icon"></i>Help</p>
        </button>
    );
}

const SupportForm = (props) => {
    return (
        <div className={styles.formContainer}>
            <div className={styles.headingFormContainer}>
                <h2 className={styles.contact}><i onClick={props.onClick} class="chevron circle down icon"></i>Contact</h2>
            </div>
            <div className={styles.contactName}>
                <div className={styles.name}>
                    <label>Name:</label>
                    <input className={styles.nameInput}></input>
                </div>
                 <div className={styles.institutionName}>
                    <label>Client:</label>
                    <input className={styles.institutionInput}></input>
                </div>
                 <div className={styles.emailForm}>
                     <label>Email:</label>
                     <input className={styles.emailInput}></input>
                 </div>
                 <div className={styles.testCode}>
                    <label>Test Code:</label>
                    <input className={styles.testCodeInput}></input>
                </div>
                <div className={styles.submitButton}>
                    <button class="positive ui button">Submit Query</button>
                </div> 
            </div>
        </div>)

}
export default ContactForm;

