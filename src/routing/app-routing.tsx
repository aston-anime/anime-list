import {createRoutesFromElements, Route} from 'react-router';
import {createBrowserRouter} from 'react-router-dom';
import {Layout} from '../components/Layout/Layout';
import {DetailedItem} from '../pages/Detailed-item/Detailed-item';
import {Main} from '../pages/Main/Main';
import {Favorites} from '../pages/Favorites/Favorites';
import {LogIn} from '../pages/Log-in/Log-in';
import {SignUp} from '../pages/Sign-up/Sign-up';
import {History} from '../pages/History/History';
import {AppRoute} from './AppRoute';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={AppRoute.Main} element={<Layout />}>
            <Route index element={<Main />} />
            <Route path={AppRoute.DetailedItem} element={<DetailedItem />} />
            <Route path={AppRoute.LogIn} element={<LogIn />} />
            <Route path={AppRoute.SignIn} element={<SignUp />} />
            <Route path={AppRoute.Favorites} element={<Favorites />} />
            <Route path={AppRoute.History} element={<History />} />
        </Route>
    )
);
