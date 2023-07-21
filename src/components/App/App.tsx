import {RouterProvider} from 'react-router-dom';
import {router} from '../../routing/app-routing';
import {init} from '../../store/actions/init';
import {useAppDispatch} from '../../hooks';

function App() {
    const dispatch = useAppDispatch();
    dispatch(init());

    return <RouterProvider router={router} />;
}

export {App};
