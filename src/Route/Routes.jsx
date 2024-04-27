import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Root from '../root/Root';
import AllArtCraftItems from '../pages/AllArtCraftItems/AllArtCraftItems';
import AddCraftItems from '../pages/AddCraftItems/AddCraftItems';
import MyArtCraftList from '../pages/MyArtCraftList/MyArtCraftList';
import ErrorNotFound from '../pages/ErrorNotFound/ErrorNotFound';
import ArtAndCraftDetails from '../pages/ViewDetailsPage/ArtAndCraftDetails';
import PrivetRoute from './PrivetRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:3000/all-art-craft-items'),
      },
      {
        path: '/all-art-craft-items',
        element: <AllArtCraftItems />,
        loader: () => fetch('http://localhost:3000/all-art-craft-items'),
      },
      {
        path: '/item-details/:id',
        element: (
          <PrivetRoute>
            <ArtAndCraftDetails />
          </PrivetRoute>
        ),
        loader: () => fetch('http://localhost:3000/all-art-craft-items'),
      },
      {
        path: '/add-craft-item',
        element: (
          <PrivetRoute>
            <AddCraftItems />
          </PrivetRoute>
        ),
      },
      {
        path: '/my-art-craft-list',
        element: (
          <PrivetRoute>
            <MyArtCraftList />
          </PrivetRoute>
        ),
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
