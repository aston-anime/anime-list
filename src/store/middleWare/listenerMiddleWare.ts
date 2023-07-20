import {createListenerMiddleware} from '@reduxjs/toolkit';
import {logIn} from '../auth/auth';
import {localStorageUtil} from '../../utils/localStorage';
import {addFavorite, deleteFavorite} from '../favorite/favorite';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: logIn,
    effect: (action) => {
        localStorageUtil.setItem(action.payload.userName, action.payload);
        localStorageUtil.setAuth(action.payload.userName);
    },
});

listenerMiddleware.startListening({
    actionCreator: addFavorite,
    effect: (action) => {
        const userName = localStorageUtil.getAuth();
        if (userName) {
            localStorageUtil.addFavorite(userName, action.payload);
        }
    },
});

listenerMiddleware.startListening({
    actionCreator: deleteFavorite,
    effect: (action) => {
        const userName = localStorageUtil.getAuth();
        if (userName) {
            localStorageUtil.deleteFavorite(userName, action.payload);
        }
    },
});

export {listenerMiddleware};
