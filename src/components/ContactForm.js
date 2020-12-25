

import styles from '../styles/ContactForm.module.scss';
import {BasicTextFields} from './UI/SupportForm.js';




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
            <div className={styles.contactDetails}>
                <BasicTextFields />
            </div>
        </div>)

}
export default ContactForm;

