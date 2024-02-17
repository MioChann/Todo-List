import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { useAuth } from './security/AuthContex';

function LoginComponent(){
    //[]
    const [username,setUsername]= useState('')
    const [password,setPassword]= useState('')
    const [showErrorMessage,setShowErrorMessage]= useState('')

    const neviage = useNavigate('')

//Authentcate
    const authContex = useAuth()


    function handleUsernameChange(event){
        console.log(username)
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        console.log(password)
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if(authContex.login(username,password)){
            neviage(`/welcome/${username}`)
            //login success 
            // authContex.setAuthenticate(true)
        }
        else{        
            setShowErrorMessage(true)
            //login failure
            // authContex.setAuthenticate(false)
        }
    }

    return(
        <div className="Login">
            <h1>Type to login</h1>

            {showErrorMessage && <div className="errorMessage">Login Failure!</div>}


            <div className="LoginForm">
                <label>User Name</label>
                <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
            </div>
        {/* ----------------------------------- */}

            <div >
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
            </div>
        {/* ----------------------------------- */}
            <div>
                <button type = "button" name = "login" onClick={handleSubmit}>login</button>
            </div>
           
                     </div>
    );
}

export default LoginComponent