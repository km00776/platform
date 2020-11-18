import styles from '../App.module.scss'; 
   
   const PersonalButton = (props) => {
        return (
            <button style= {{backgroundColor:'#00324d' }} className="positive ui button">{props.label}</button>
        )   
    }

    export default PersonalButton;