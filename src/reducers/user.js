import { createReducer } from "@reduxjs/toolkit";

const initialState={
    isAuthenticated:false,
};

export const userReducer=createReducer(initialState,{
    LOGIN_REQUEST:(state)=>{
        state.loading=true
    },
    LOGIN_SUCCESS:(state,action)=> {
        state.loading=false;
        state.user=action.payload.user;
        state.token=action.payload.token
        state.isAuthenticated=true
    },
    LOGIN_FAILURE:(state,action)=> {
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticated=false;
    },

    SIGNUP_REQUEST:(state)=>{
        state.loading=true
    },
    SIGNUP_SUCCESS:(state,action)=> {
        state.loading=false;
        state.user=action.payload.newUser;
        state.token=action.payload.token
        state.isAuthenticated=true
    },
    SIGNUP_FAILURE:(state,action)=> {
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticated=false;
    },

    LOAD_USER_REQUEST:(state)=>{
        state.loading=true
    },
    LOAD_USER_SUCCESS:(state,action)=> {
        state.loading=false;
        state.user=action.payload;
        state.isAuthenticated=true
    },
    LOAD_USER_FAILURE:(state,action)=> {
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticated=false;
    },

    CLEAR_ERROR:(state)=> {
        state.error=null;
    }
})