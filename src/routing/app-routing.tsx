import {createRoutesFromElements, Route} from 'react-router';
import {createBrowserRouter} from 'react-router-dom';
import {Layout} from '../components/Layout/Layout';
import {AppRoute} from './AppRoute';
import {
    DetailedItemPage,
    FavoritesPage,
    HistoryPage,
    LogInPage,
    MainPage,
    SearchPage,
    SignUpPage,
} from './lazy-routes';

const searchRoute = {
    path: `${AppRoute.Search}/:results`,
    element: <SearchPage />,
};

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={AppRoute.Main} element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path={searchRoute.path} element={searchRoute.element} />
            {/* <Route path={AppRoute.Search} element={<SearchPage />} /> */}
            <Route path={AppRoute.DetailedItem} element={<DetailedItemPage />} />
            <Route path={AppRoute.LogIn} element={<LogInPage />} />
            <Route path={AppRoute.SignUp} element={<SignUpPage />} />
            <Route path={AppRoute.Favorites} element={<FavoritesPage />} />
            <Route path={AppRoute.History} element={<HistoryPage />} />
        </Route>
    )
);
