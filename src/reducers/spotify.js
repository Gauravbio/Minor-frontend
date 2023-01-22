import { createReducer } from "@reduxjs/toolkit";

const initialState={};

export const spotifyReducer=createReducer(initialState,{
    TOP_200_REQUEST:(state)=>{
        state.loading=true
    },
    TOP_200_SUCCESS:(state,action)=> {
        state.loading=false;
        state.top_songs=action.payload;
    },
    TOP_200_FAILURE:(state,action)=> {
        state.loading=false;
        state.error=action.payload
    }
})