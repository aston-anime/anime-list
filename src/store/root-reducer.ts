import {combineReducers} from '@reduxjs/toolkit';
import {auth} from './auth/auth';
import {NameSpace} from './NameSpace';

export const rootReducer = combineReducers({
    [NameSpace.Auth]: auth.reducer,
});
