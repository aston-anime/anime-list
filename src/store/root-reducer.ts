import {combineReducers} from '@reduxjs/toolkit';
import {cardsApi} from '../api/cardsApi';
import {auth} from './auth/auth';
import {favorite} from './favorite/favorite';
import {NameSpace} from './NameSpace';

export const rootReducer = combineReducers({
    [NameSpace.Auth]: auth.reducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
    [NameSpace.Favorite]: favorite.reducer,
});
