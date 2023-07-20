import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../NameSpace';
import {AnimeWithId} from '../../types/animeData';

type InitialState = {
    favorite: AnimeWithId[];
};

const initialState: InitialState = {
    favorite: [],
};

export const favorite = createSlice({
    name: NameSpace.Favorite,
    initialState,
    reducers: {
        getFavorite: (state, action) => {
            state.favorite = [...action.payload];
        },
        addFavorite: (state, action) => {
            state.favorite = [...state.favorite, action.payload];
        },
        deleteFavorite: (state, action) => {
            state.favorite = [...state.favorite.filter((item) => item.id !== action.payload)];
        },
    },
});

export const {getFavorite, addFavorite, deleteFavorite} = favorite.actions;
