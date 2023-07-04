import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <p>React</p>,
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
