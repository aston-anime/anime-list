import {createRoutesFromElements, Route} from 'react-router';
import {createBrowserRouter} from 'react-router-dom';
import {ErrorBoundary} from 'react-error-boundary';
import {Layout} from '../components/Layout/Layout';
import {ErrorPage} from '../pages/Error-page/Error-page';
import {AppRoute} from './AppRoute';
import {PrivateOutlet} from './PrivateRoute';
import {
    DetailedItemPage,
    FavoritesPage,
    HistoryPage,
    LogInPage,
    MainPage,
    SearchPage,
    SignUpPage,
} from './lazy-routes';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path={AppRoute.Main}
            element={
                <ErrorBoundary FallbackComponent={ErrorPage}>
                    <Layout />
                </ErrorBoundary>
            }
        >
            <Route index element={<MainPage />} />
            <Route path={AppRoute.Search} element={<SearchPage />} />
            <Route path={AppRoute.DetailedItem} element={<DetailedItemPage />} />
            <Route path={AppRoute.LogIn} element={<LogInPage />} />
            <Route path={AppRoute.SignUp} element={<SignUpPage />} />
            <Route path={AppRoute.Favorites} element={<PrivateOutlet />}>
                <Route index element={<FavoritesPage />} />
            </Route>
            <Route path={AppRoute.History} element={<PrivateOutlet />}>
                <Route index element={<HistoryPage />} />
            </Route>
        </Route>
    )
);
