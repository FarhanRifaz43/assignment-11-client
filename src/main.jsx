import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx'
import ErrorPage from './ErrorPage.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from './components/Home/Home.jsx';
import AllServices from './components/Services/AllServices.jsx';
import ServiceDetail from './components/ServiceDetail/ServiceDetail.jsx';
import Login from './Auth/Login.jsx';
import Register from './Auth/Register.jsx';
import AuthProvider from './Auth/AuthProvider.jsx';
import PrivateRoute from './Auth/PrivateRoute.jsx';
import AddService from './components/Dashboard/AddService.jsx';
import MyServices from './components/Dashboard/MyServices.jsx';
import MySchedule from './components/Dashboard/MySchedule.jsx';


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
        loader: () => fetch('https://tour-service-server.vercel.app/services')
      },
      {
        path: '/services/:id',
        element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`https://tour-service-server.vercel.app/services/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/add',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: '/my-services',
        element: <PrivateRoute><MyServices></MyServices></PrivateRoute>
      },
      {
        path: '/my-schedule',
        element: <PrivateRoute><MySchedule></MySchedule></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
