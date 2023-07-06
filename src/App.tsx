import {RouterProvider, createBrowserRouter} from 'react-router-dom';

function App() {
    const router = createBrowserRouter([
        {
            path: '/anime-list',
            element: <p>Hello world</p>,
        },
    ]);
    return <RouterProvider router={router} />;
}

export {App};
