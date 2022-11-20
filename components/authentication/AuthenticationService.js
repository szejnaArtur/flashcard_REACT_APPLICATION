import axios from 'axios';

import {API_URL} from "../../Constans";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
export const USER_NAME_SESSION_ATTRIBUTE_TOKEN = 'token';

class AuthenticationService {

    createJwtToken(token){
        return 'Bearer ' + token;
    }

    executeJwtAuthenticationService(username, password){
        return axios.post(`${API_URL}/api/login`, {
            username,
            password
        });
    }

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_TOKEN, token);
        this.setupAxiosInterceptors(this.createJwtToken(token));
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token;
                }
                return config;
            }
        )
    }

    isUserLoggedIn() {
        if (typeof window !== "undefined") {
            return sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        }
        return null;
    }

}

export default new AuthenticationService();