import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../NameSpace';

type InitialState = object;

const initialState: InitialState = {};

export const signUp = createSlice({
    name: NameSpace.SignUp,
    initialState,
    reducers: {},
});
