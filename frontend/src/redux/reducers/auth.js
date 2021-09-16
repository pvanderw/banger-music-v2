import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    user: null,
    error: null,
    loading: false,
}

const authStart = (state, action) => {
    return Object.assign({}, state, {
        error: null,
        loading: true,
    });
}

const authSuccess = (state, action) => {
    return Object.assign({}, state, {
        token: action.token,
        user: action.user,
        error: null,
        loading: false,
    });
}

const authFail = (state, action) => {
    return Object.assign({}, state, {
        error: action.error,
        loading: false,
    });
}

const authLogout = (state, action) => {
    return Object.assign({}, state, {
        token: null,
        user: null,
    });
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
}

export default authReducer;