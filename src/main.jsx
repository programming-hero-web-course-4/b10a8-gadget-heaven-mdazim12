import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './components/Root/Root';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import ProductCard from './components/ProductCard/ProductCard';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../Categories.json'),
        children: [
          {
            path: '/category/:category',
            element: <ProductCard></ProductCard>,
            loader : () => fetch('../All-Products.json'),
          },
        ]
      },
    ]

  },
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
