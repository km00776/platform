import PersonalButton from './PersonalButton';
import '../index.scss';
import styles from '../App.module.scss';
import { Fragment } from 'react';
import { Checkbox } from 'semantic-ui-react';


const AllocationScreen = () => {
    return(
    <Fragment>
        <PersonalButton label="QUESTION AUTHORING"/>
        <PersonalButton label="TEST BUILD"/>
        <PersonalButton label="CLIENT SETUP"/>
        <PersonalButton label="TEST CODE ALLOCATION"/>
        <PersonalButton label="RESULTS & CERTIFICATES"/>
        <PersonalButton label="REPORTING"/>
        <PersonalButton label="CMS"/>
        <PersonalButton label="LOGOUT"/>
        <h1>Clients</h1><PersonalButton label="Search"></PersonalButton>
        <p>Find <input></input> </p>
        <p>All<Checkbox></Checkbox></p> <p>Yes<Checkbox></Checkbox></p> 
        <p>Yes<Checkbox></Checkbox></p>
        <p>No<Checkbox></Checkbox></p>
        <hr />
    </Fragment>)
}

export default AllocationScreen