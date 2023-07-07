import {RouterProvider} from 'react-router-dom';
import {router} from '../../routing/app-routing';

function App() {
    return <RouterProvider router={router} />;
}

export {App};
