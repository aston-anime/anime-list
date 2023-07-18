import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../NameSpace';

type InitialState = {
    authorizationStatus: boolean;
    userName: string;
};

const initialState: InitialState = {
    authorizationStatus: false,
    userName: '',
};

export const auth = createSlice({
    name: NameSpace.Auth,
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.authorizationStatus = true;
            state.userName = action.payload.userName;
        },
        logOut: (state) => {
            state.authorizationStatus = false;
        },
    },
});

export const {logIn, logOut} = auth.actions;
