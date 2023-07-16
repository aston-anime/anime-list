import {createListenerMiddleware} from '@reduxjs/toolkit';
import {setUser} from '../auth/auth';
import {LocalStorageUtil} from '../../utils/LocalStorageUtil';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: setUser,
    effect: (action) => {
        LocalStorageUtil.setItem(action.payload.userName, action.payload);
        LocalStorageUtil.setAuth(action.payload.userName);
    },
});

export {listenerMiddleware};
