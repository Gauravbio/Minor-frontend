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
    },

    PLAYLIST_DETAILS_REQUEST:(state)=> {
        state.loading=true
    },
    PLAYLIST_DETAILS_SUCCESS:(action,state)=> {
        state.loading=false;
        state.playlistDetails=action.payload
    },
    PLAYLIST_DETAILS_FAILURE:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },

    PLAYLIST_SONGS_REQUEST:(state)=> {
        state.loading=true
    },
    PLAYLIST_SONGS_SUCCESS:(state,action)=>{
        state.loading=false;
        state.playlist=action.payload
    },
    PLAYLIST_SONGS_FAILURE:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },

    SONG_PLAYING_REQUEST:(state)=> {
        state.loading=true
    },
    SONG_PLAYING_SUCCESS:(state,action)=> {
        state.loading=false;
        state.activeSong=action.payload
    },
    SONG_PLAYING_FAILURE:(state,action)=> {
        state.loading=false;
        state.activeSong=null;
    },

    ALBUM_DETAILS_REQUEST:(state)=>{
        state.loading=true;
    },
    ALBUM_DETAILS_SUCCESS:(state,action)=> {
        state.loading=false;
        state.albumDetails=action.payload;
    },
    ALBUM_DETAILS_FAILURE:(state,action)=> {
        state.loading=false;
        state.error=action.payload;
    },

    TRACK_DETAILS_REQUEST:(state)=> {
        state.loading=true;
    },
    TRACK_DETAILS_SUCCESS:(state,action)=> {
        state.loading=false;
        state.songRequested=action.payload
    },
    TRACK_DETAILS_FAILURE:(state,action)=> {
        state.loading=false;
        state.error=action.payload;
    },

    SEARCH_REQUEST:(state)=> {
        state.loading=true;
    },
    SEARCH_SUCCESS:(state,action)=> {
        state.loading =false;
        state.searchResult=action.payload
    },
    SEARCH_FAILURE:(state,action)=> {
        state.loading=false;
        state.error=action.payload;
    },

    EMOTION_REQUEST:(state)=> {
        state.emotionLoading=true
    },
    EMOTION_SUCCESS:(state,action)=> {
        state.emotionLoading=false;
        state.emotion=action.payload
    },
    EMOTION_FAILURE:(state,action)=> {
        state.emotionLoading=false;
        state.error=action.payload
    },

    CLEAR_MESSAGE:(state)=> {
        state.message=null
    },

    CLEAR_ERROR:(state)=> {
        state.error=null;
    }
})