import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../NameSpace';

type InitialState = object;

const initialState: InitialState = {};

export const logIn = createSlice({
    name: NameSpace.LogIn,
    initialState,
    reducers: {},
});
