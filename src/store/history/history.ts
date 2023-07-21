import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../NameSpace';
import {HistoryRecord} from '../../types/HistoryRecord';

type InitialState = {
    history: HistoryRecord[];
};

const initialState: InitialState = {
    history: [],
};

export const history = createSlice({
    name: NameSpace.History,
    initialState,
    reducers: {
        updateHistory: (state, action) => {
            state.history = [action.payload, ...state.history];
        },
        setHistory: (state, action) => {
            state.history = action.payload;
        },
        clearHistory: (state) => {
            state.history = [];
        },
    },
});

export const {updateHistory, setHistory, clearHistory} = history.actions;
