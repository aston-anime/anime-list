import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from './NameSpace';
import {logIn} from './login/login';
import {signUp} from './signup/signup';

export const rootReducer = combineReducers({
    [NameSpace.LogIn]: logIn.reducer,
    [NameSpace.SignUp]: signUp.reducer,
});
