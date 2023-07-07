import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from './NameSpace';
import {logIn} from './login/login';

export const rootReducer = combineReducers({
    [NameSpace.LogIn]: logIn.reducer,
});
