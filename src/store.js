import {configureStore} from '@reduxjs/toolkit';
import { spotifyReducer } from './reducers/spotify';
import { userReducer } from './reducers/user';

const store= configureStore({
    reducer:{
        user:userReducer,
        songs:spotifyReducer
    }
})

export default store;