import {lazy} from 'react';

export const MainPage = lazy(() =>
    import('../pages/Main/Main').then((module) => ({default: module.Main}))
);

export const SearchPage = lazy(() =>
    import('../pages/Search/Search').then((module) => ({
        default: module.Search,
    }))
);

export const DetailedItemPage = lazy(() =>
    import('../pages/Detailed-item/Detailed-item').then((module) => ({
        default: module.DetailedItem,
    }))
);

export const LogInPage = lazy(() =>
    import('../pages/Log-in/Log-in').then((module) => ({
        default: module.LogIn,
    }))
);

export const SignUpPage = lazy(() =>
    import('../pages/Sign-up/Sign-up').then((module) => ({
        default: module.SignUp,
    }))
);

export const FavoritesPage = lazy(() =>
    import('../pages/Favorites/Favorites').then((module) => ({
        default: module.Favorites,
    }))
);

export const HistoryPage = lazy(() =>
    import('../pages/History/History').then((module) => ({
        default: module.History,
    }))
);
