import {combineReducers} from '@reduxjs/toolkit';
import {cardsApi} from '../api/cardsApi';
import {auth} from './auth/auth';
import {favorite} from './favorite/favorite';
import {history} from './history/history';
import {NameSpace} from './NameSpace';

export const rootReducer = combineReducers({
    [NameSpace.Auth]: auth.reducer,
    [NameSpace.Favorite]: favorite.reducer,
    [NameSpace.History]: history.reducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
});
