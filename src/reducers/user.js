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
        state.message=action.payload.message;
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
        state.user=action.payload;
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

    LOGOUT_REQUEST:(state)=>{
        state.loading=true;
    },
    LOGOUT_SUCCESS:(state)=> {
        state.loading=false;
        state.user=null;
        state.message="Logged out"
        state.isAuthenticated=false;
    },
    LOGOUT_FAILURE:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },

    FORGOT_REQUEST:(state)=> {
        state.loading=true;
    },
    FORGOT_SUCCESS:(state,action)=> {
        state.loading=false;
        state.message=action.payload
    },
    FORGOT_FAILURE:(state,action)=> {
        state.loading=false;
        state.error=action.payload
    },

    RESET_REQUEST:(state)=> {
        state.loading=true;
    },
    RESET_SUCCESS:(state,action)=>{
        state.loading=false;
        state.message=action.payload
    },
    RESET_FAILURE:(state,action)=> {
        state.loading=false;
        state.error=action.payload
    },

    RECENT_REQUEST:(state)=> {
        state.loading=true
    },
    RECENT_SUCCESS:(state,action)=> {
        state.loading=false;
        state.recents=action.payload
    },
    RECENT_FAILURE:(state,action)=> {
        state.loading=false;
        state.error=action.payload;
    },

    FAVOURITE_REQUEST:(state)=> {
        state.loading=true
    },
    FAVOURITE_SUCCESS:(state,action)=> {
        state.loading=false;
        state.message=action.payload
    },
    FAVOURITE_FAILURE:(state,action)=> {
        state.loading=false;
        state.error=action.payload
    },

    CLEAR_MESSAGE:(state)=> {
        state.message=null
    },

    CLEAR_ERROR:(state)=> {
        state.error=null;
    }
})