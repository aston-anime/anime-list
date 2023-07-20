import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../NameSpace';
import {AnimeWithId} from '../../types/animeData';

type InitialState = {
    favorites: AnimeWithId[];
};

const initialState: InitialState = {
    favorites: [],
};

export const favorite = createSlice({
    name: NameSpace.Favorite,
    initialState,
    reducers: {
        setFavorites: (state, action) => {
            state.favorites = [...action.payload];
        },
        addFavorite: (state, action) => {
            state.favorites = [...state.favorites, action.payload];
        },
        deleteFavorite: (state, action) => {
            state.favorites = [...state.favorites.filter((item) => item.id !== action.payload)];
        },
        clearFavorites: (state) => {
            state.favorites = [];
        },
    },
});

export const {setFavorites, addFavorite, deleteFavorite, clearFavorites} = favorite.actions;
