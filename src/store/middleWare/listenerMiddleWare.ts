import {createListenerMiddleware} from '@reduxjs/toolkit';
import {logIn} from '../auth/auth';
import {localStorageUtil} from '../../utils/localStorage';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: logIn,
    effect: (action) => {
        localStorageUtil.setItem(action.payload.userName, action.payload);
        localStorageUtil.setAuth(action.payload.userName);
    },
});

export {listenerMiddleware};
