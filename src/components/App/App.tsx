import {RouterProvider} from 'react-router-dom';
import {router} from '../../routing/app-routing';
import {localStorageUtil} from '../../utils/localStorage';

function App() {
    localStorageUtil.clearLocalStorage();
    return <RouterProvider router={router} />;
}

export {App};
