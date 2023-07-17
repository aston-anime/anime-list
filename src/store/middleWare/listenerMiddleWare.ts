import {createListenerMiddleware} from '@reduxjs/toolkit';
import {LocalStorageUtil} from '../../utils/LocalStorageUtil';
import {logIn} from '../auth/auth';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: logIn,
    effect: (action) => {
        LocalStorageUtil.setItem(action.payload.userName, action.payload);
        LocalStorageUtil.setAuth(action.payload.userName);
    },
});

export {listenerMiddleware};
