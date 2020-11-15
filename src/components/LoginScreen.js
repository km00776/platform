import PersonalButton from './PersonalButton';


const LoginScreen = () => {
    return(
    <div className='mainColor'>
        <h1 className="intro"> Please Login</h1>
        <PersonalButton label='check tests remaining' className="testsRemainingButton"></PersonalButton> 
        <PersonalButton label="Login" className="loginLocation"></PersonalButton>
    </div>
    );
    
}



export default LoginScreen;