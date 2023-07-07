import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {Main} from '../../pages/Main/Main';
import {AppRoute} from '../../AppRoute';
import {LogIn} from '../../pages/Log-in/Log-in';
import {SingIn} from '../../pages/Sign-in/Sign-in';
import {Favorites} from '../../pages/Favorites/Favorites';
import {DetailedItem} from '../../pages/Detailed-item/Detailed-item';
import {History} from '../../pages/History/History';

function App() {
    const router = createBrowserRouter([
        {
            path: AppRoute.Main,
            element: <Main />,
        },
        {
            path: AppRoute.DetailedItem,
            element: <DetailedItem />,
        },
        {
            path: AppRoute.LogIn,
            element: <LogIn />,
        },
        {
            path: AppRoute.SingnIn,
            element: <SingIn />,
        },
        {
            path: AppRoute.Favorites,
            element: <Favorites />,
        },
        {
            path: AppRoute.History,
            element: <History />,
        },
    ]);
    return <RouterProvider router={router} />;
}

export {App};
