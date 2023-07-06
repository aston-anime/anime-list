import {render} from '@testing-library/react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

describe('App', () => {
    it('renders without crashing', () => {
        const router = createBrowserRouter([
            {
                path: '/',
                element: <p>React</p>,
            },
        ]);
        render(<RouterProvider router={router} />);
    });
});
