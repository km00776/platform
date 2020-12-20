

import styles from '../styles/ContactForm.module.scss';

const ContactForm = (props) => {
   
    return(
        // if true render supportForm otherwise, render the button
          <div>{props.visiblility ?  <SupportForm onClick={props.onClick} /> : <SupportButton onClick={props.onClick}/>}</div>
          
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
       <h2 className={styles.contact}><i onClick={props.onClick}class="chevron circle down icon"></i>Contact</h2> 
    </div>
    <div>
        <div>
        <div className={styles.formInput}>
                    {/* <div className={styles.name}>
                        <label className={styles.Label}><i class="info circle icon"></i>Your Name:</label>
                        <br></br>
                        <input className={styles.Input}></input>
                    </div>
                    <br></br>
                    <div className={styles.email}>
                        <label className={styles.Label}><i class="info circle icon"></i>E-mail:</label>
                        <br></br>
                        <input type="password" className={styles.Input}></input>
                    </div>
                    <div className={styles.subject}>
                        <label className={styles.Label}><i class="info circle icon"></i>Subject:</label>
                        <br></br>
                        <input type="password" className={styles.Input}></input>
                    </div>
                    <div className={styles.message}>
                        <label className={styles.Label}><i class="info circle icon"></i>Message:</label>
                        <br></br>
                        <input type="password" className={styles.Input}></input>
                    </div> */}
                
        </div>
            
        </div>
    </div>
</div>)

                }
export default ContactForm;

