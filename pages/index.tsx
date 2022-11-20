import React, {useState} from "react";

// @ts-ignore
import LoginPage from '../components/auth/form/LoginPage.jsx';
// @ts-ignore
import Dashboard from '../components/Dashboard.jsx';

import AuthenticationService from "../components/authentication/AuthenticationService";

export default function Home() {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(AuthenticationService.isUserLoggedIn());

    return (
        <div>
            <LoginPage click={setIsUserLoggedIn}/>
        </div>
    )
}
