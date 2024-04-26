import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Root from '../root/Root';
import AllArtCraftItems from '../pages/AllArtCraftItems/AllArtCraftItems';
import AddCraftItems from '../pages/AddCraftItems/AddCraftItems';
import MyArtCraftList from '../pages/MyArtCraftList/MyArtCraftList';
import ErrorNotFound from '../pages/ErrorNotFound/ErrorNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/all-art-craft-items',
        element: <AllArtCraftItems />,
      },
      {
        path: '/add-craft-item',
        element: <AddCraftItems />,
      },
      {
        path: '/my-art-craft-list',
        element: <MyArtCraftList />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
export default router;
