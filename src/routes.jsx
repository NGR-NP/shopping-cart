import { createBrowserRouter } from 'react-router-dom';
import { NavLayout } from './layout/NavLayout';
import Cart from './pages/Cart';
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: "/",
    element: <NavLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/cart",
        element: <Cart />,
      }, {
        path: "/product/:id",
        element: <SingleProduct />,
      }, {
        path: "/tt",
        element: <p>tt</p>,
      }, {
        path: "/ttt",
        element: <p>ttt</p>,
      }
    ]
  }
]);
