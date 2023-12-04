import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { loginThunk, registerThunk, refreshThunk, logoutThunk } from '../services';
//import Notiflix from "notiflix";

const initialState = {
    isLoading: false,
    error: null,
    authenticated: false,
    token: null,
    userData: null,
};

const authSlice = createSlice({
    // Ім'я слайсу
    name: "auth",
    // Початковий стан редюсера слайсу
    initialState,
    // Об'єкт редюсерів
    reducers: {},
    extraReducers: builder => builder
    .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
    })
        
    .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
    })
    .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.userData = payload;
    })
        .addCase(logoutThunk.fulfilled, () => {
            return initialState;
        })
                  
        .addMatcher(
            isAnyOf(
                loginThunk.pending,
                registerThunk.pending,
                refreshThunk.pending,
                logoutThunk.pending
                ),
            state => {
                state.isLoading = true;
                state.error = null;
        })
        
        .addMatcher(
            isAnyOf(
                registerThunk.rejected,
                loginThunk.rejected,
                refreshThunk.rejected,
                logoutThunk.rejected
            ),
            (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
            })
 });

// Генератори екшн-креаторс
export const authReducer = authSlice.reducer;