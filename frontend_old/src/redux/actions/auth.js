import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
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
    localStorage.removeItem("expirationDate");
    return {
        type: actionTypes.AUTH_LOGOUT,
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
            const expirationDate = new Date(new Date().get_time() + 3600);
            localStorage.setItem("JWT", token);
            localStorage.setItem("expirationDate", expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .error(error => {
            dispatch(authFail(error));            
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
            const expirationDate = new Date(new Date().get_time() + 3600);
            localStorage.setItem("JWT", token);
            localStorage.setItem("expirationDate", expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .error(error => {
            dispatch(authFail(error));            
        });
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem("JWT");
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = localStorage.getItem("expirationDate");
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }

    }
}