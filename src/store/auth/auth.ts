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
        toggleAuth: (state) => {
            state.authorizationStatus = !state.authorizationStatus;
        },
        setUser: (state, action) => {
            state.userName = action.payload;
        },
    },
});

export const {toggleAuth, setUser} = auth.actions;
