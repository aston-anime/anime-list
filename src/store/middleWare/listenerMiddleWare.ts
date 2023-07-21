import {createListenerMiddleware} from '@reduxjs/toolkit';
import {logIn} from '../auth/auth';
import {localStorageUtil} from '../../utils/localStorage';
import {addFavorite, deleteFavorite, setFavorites} from '../favorite/favorite';
import {init} from '../actions/init';
import {store} from '..';
import {HistoryRecord} from '../../types/HistoryRecord';
import {setHistory, updateHistory} from '../history/history';
import {search} from '../actions/search';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: init,
    effect: () => {
        const userName = localStorageUtil.getAuth();
        if (userName) {
            const userInfo = localStorageUtil.getItem(userName);
            store.dispatch(logIn(userInfo));
            store.dispatch(setFavorites(userInfo?.favorites));
            store.dispatch(setHistory(userInfo?.history));
        }
    },
});

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

listenerMiddleware.startListening({
    actionCreator: search,
    effect: (action) => {
        const {user, query, queryResult} = action.payload;
        if (user) {
            if (query === '') {
                return;
            }

            const currentHistory = localStorageUtil.getSearchHistory(user);

            const historyRecord: HistoryRecord = {
                query,
                timestamp: new Date().toLocaleString(),
                queryResultNumber: queryResult?.length || 0,
                queryResultLink: `/anime-list/search/?query=${query}&results=${encodeURIComponent(
                    JSON.stringify(queryResult)
                )}`,
            };

            const updatedHistory = currentHistory
                ? [historyRecord, ...currentHistory]
                : [historyRecord];
            localStorageUtil.setSearchHistory(user, updatedHistory);
            store.dispatch(updateHistory(historyRecord));
        }
    },
});

export {listenerMiddleware};
