import * as actionTypes from './actionTypes';
import axios from 'axios';
import { push } from 'connected-react-router';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        user: user,
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    }
}

export const logout = () => {
    localStorage.removeItem("JWT");
    return {
        type: actionTypes.AUTH_LOGOUT,
        token: null,
        user: null,
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    }
}


export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post("api/auth/login/", {
            username: username,
            password: password,
        })
        .then(res => {
            const token = res.data.access;
            localStorage.setItem("JWT", token);
            dispatch(authSuccess(token, res.data.user));
            dispatch(push("/"));
        })
        .catch(error => {
            dispatch(authFail("No active account found with the given credentials"));
        });
    }
}

export const authSignup = (username, email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post("api/auth/signup/", {
            username: username,
            email: email,
            password: password,
        })
        .then(res => {
            const token = res.data.access;
            localStorage.setItem("JWT", token);
            dispatch(authSuccess(token));
        })
        .catch(error => {
            dispatch(authFail(error));            
        });
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem("JWT");
        if (token === undefined) {
            console.log("logging out token null");
            dispatch(logout());
        } else {
            dispatch(authSuccess(token));
        }

    }
}