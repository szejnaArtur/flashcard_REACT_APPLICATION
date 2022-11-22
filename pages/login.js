import React, {useState} from 'react';
import AuthenticationService from "../components/authentication/AuthenticationService";
import LoginPage from "../components/auth/form/LoginPage";

function login() {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(AuthenticationService.isUserLoggedIn());

    return (
        <div>
            <LoginPage click={setIsUserLoggedIn}/>
        </div>
    )
}

export default login;
