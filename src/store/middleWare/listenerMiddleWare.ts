import {createListenerMiddleware} from '@reduxjs/toolkit';
import {localStorageUtil} from '../../utils/localStorageUtil';
import {logIn} from '../auth/auth';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: logIn,
    effect: (action) => {
        localStorageUtil.setItem(action.payload.userName, action.payload);
        localStorageUtil.setAuth(action.payload.userName);
    },
});

export {listenerMiddleware};
