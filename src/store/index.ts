import {configureStore} from '@reduxjs/toolkit';
import {cardsApi} from '../api/cardsApi';
import {rootReducer} from './root-reducer';
import {listenerMiddleware} from './middleWare/listenerMiddleWare';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(listenerMiddleware.middleware).concat(cardsApi.middleware),
});
