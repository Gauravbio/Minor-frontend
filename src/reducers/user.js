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
        state.isAuthenticated=false;
    },
    LOGOUT_FAILURE:(state)=>{
        state.loading=false;
    },

    CLEAR_MESSAGE:(state)=> {
        state.message=null
    },

    CLEAR_ERROR:(state)=> {
        state.error=null;
    }
})