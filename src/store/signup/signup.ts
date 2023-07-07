import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../NameSpace';

type InitialState = {
    onSignUpPage: boolean;
};

const initialState: InitialState = {
    onSignUpPage: false,
};

export const signUp = createSlice({
    name: NameSpace.SignUp,
    initialState,
    reducers: {
        toggleOnSignUpPage: (state) => {
            state.onSignUpPage = !state.onSignUpPage;
        },
    },
});

export const {toggleOnSignUpPage} = signUp.actions;
