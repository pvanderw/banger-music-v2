import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    token: null,
    user: null,
    error: null,
    status: 'idle',
}

export const authLogin = createAsyncThunk('auth/authLogin', async (params, { rejectWithValue }) => {
    const { username, password } = params;
    try {
        const res = await axios.post("api/auth/login/", {
            username: username,
            password: password,
        });
        const token = res.data.access;
        localStorage.setItem("JWT", token);
        return res.data;
    }
    catch (error) {
        return rejectWithValue(error.response.data.detail);
    }
});


export const authSignup = createAsyncThunk('auth/authSignup', async (params, { rejectWithValue }) => {
    const { username, email, password } = params;
    try {
        const res = await axios.post("api/auth/signup/", {
            username: username,
            email: email,
            password: password,

        });
        const token = res.data.access;
        localStorage.setItem("JWT", token);
        return res.data;
    }
    catch (error) {
        return rejectWithValue(error.response.data.detail);
    }
});


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLogout: state => {
            localStorage.removeItem("JWT");
            state.token = null;
            state.user = null;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(authLogin.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(authLogin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log(action);
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.error = null;
            })
            .addCase(authLogin.rejected, (state, action) => {
                state.status = 'failed';
                console.log(action.payload);
                state.error = action.payload;
            })
            .addCase(authSignup.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(authSignup.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.error = null;
            })
            .addCase(authSignup.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});


export const { authLogout } = authSlice.actions;

export default authSlice.reducer;
