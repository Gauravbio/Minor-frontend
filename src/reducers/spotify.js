import { createReducer } from "@reduxjs/toolkit";

const initialState={};

export const spotifyReducer=createReducer(initialState,{
    TOP_20_REQUEST:(state)=>{
        state.loading=true
    },
    TOP_20_SUCCESS:(state,action)=> {
        state.loading=false;
        state.top_20=action.payload;
    },
    TOP_20_FAILURE:(state,action)=> {
        state.loading=false;
        state.error=action.payload
    }
})