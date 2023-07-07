import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../NameSpace';

type InitialState = {
    onLogInPage: boolean;
};

const initialState: InitialState = {
    onLogInPage: false,
};

export const logIn = createSlice({
    name: NameSpace.LogIn,
    initialState,
    reducers: {
        toggleOnLogInPage: (state) => {
            state.onLogInPage = !state.onLogInPage;
        },
    },
});

export const {toggleOnLogInPage} = logIn.actions;
