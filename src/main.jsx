import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx'
import ErrorPage from './ErrorPage.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from './components/Home/Home.jsx';
import AllServices from './components/Services/AllServices.jsx';
import ServiceDetail from './components/ServiceDetail/ServiceDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/services',
        element: <AllServices></AllServices>,
        loader: () => fetch('http://localhost:3000/services')
      },
      {
        path: '/services/:id',
        element: <ServiceDetail></ServiceDetail>,
        loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
