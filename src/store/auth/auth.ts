import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../NameSpace';

type InitialState = {
    authorizationStatus: boolean;
    userName?: string;
};

const initialState: InitialState = {
    authorizationStatus: false,
};

export const auth = createSlice({
    name: NameSpace.Auth,
    initialState,
    reducers: {
        logIn: (state) => {
            state.authorizationStatus = true;
        },
        logOut: (state) => {
            state.authorizationStatus = false;
        },
        setUser: (state, action) => {
            state.userName = action.payload;
        },
    },
});

export const {logIn, logOut, setUser} = auth.actions;
