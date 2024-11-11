import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/Root/Root';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import ProductCard from './components/ProductCard/ProductCard';
import Details from './components/Details/Details';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Deshboard from './components/Deshboard/Deshboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../Categories.json'),
        children: [
          {
            path: '/',
            element: <ProductCard />,
            loader: () => fetch('../All-Products.json'),
          },
          {
            path: '/category/:category',
            element: <ProductCard />,
            loader: () => fetch('../All-Products.json'),
          },
        ]
      },
      {
        path: '/product/:product_id',
        element: <Details />,
        loader: () => fetch('../All-Products.json'),
      },
      {
        path : '/deshboard',
        element : <Deshboard></Deshboard>
    
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </StrictMode>
);
