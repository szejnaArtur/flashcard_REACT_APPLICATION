import React, {useState} from "react";
import AuthenticationService from '../components/authentication/AuthenticationService';

export default function Home() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasLoginFailed, setHasLoginFailed] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(AuthenticationService.isUserLoggedIn());

    const handleEmailChange = (event) => {
        const {value} = event.target;
        setEmail(value);
    }

    const handlePasswordChange = (event) => {
        const {value} = event.target;
        setPassword(value);
    }

    const loginClicked = () => {
        AuthenticationService
            .executeJwtAuthenticationService(email, password)
            .then(
                (response) => {
                    AuthenticationService.registerSuccessfulLoginForJwt(email, response.data.token);
                    setIsUserLoggedIn(AuthenticationService.isUserLoggedIn);
                    setHasLoginFailed(false);
                    setShowSuccessMessage(true);
                }
            ).catch(
            () => {
                setHasLoginFailed(true);
                setShowSuccessMessage(true);
            }
        )
    }

    return (
        <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>

                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your
                        account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Or start your trial now!
                        </a>
                    </p>
                </div>
                <form className="mt-8 space-y-6" method="POST">
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <input id="email-address" name="email" type="text" autoComplete="email" required
                                   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                   placeholder="Email address" value={email} onChange={handleEmailChange}/>
                        </div>
                        <div>
                            <input id="password" name="password" type="password" autoComplete="current-password"
                                   required
                                   className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                   placeholder="Password" value={password} onChange={handlePasswordChange}/>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox"
                                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember
                                me</label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your
                                password?</a>
                        </div>
                    </div>
                    <div>
                        <button type="submit" onClick={loginClicked}
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd"
                                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                  clipRule="evenodd"/>
                            </svg>
                        </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
