import styles from '../App.module.scss';

   
   const PersonalButton = (props) => {
        return (
            <button className="btn"><span>{props.label}</span></button>
        )   
    }

    export default PersonalButton;