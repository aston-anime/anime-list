import {combineReducers} from '@reduxjs/toolkit';
import {cardsApi} from '../api/cardsApi';
import {auth} from './auth/auth';
import {NameSpace} from './NameSpace';

export const rootReducer = combineReducers({
    [NameSpace.Auth]: auth.reducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
});
