import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layout/MainLayout";

import Menu from "../pages/ourMenu/Menu";
import OurShop from "../pages/ourShop/OurShop";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Cart from "../pages/dashboard/user/cart/Cart";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/dashboard/admin/AllUsers";
import AddItems from "../pages/dashboard/admin/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import AdminHome from "../pages/dashboard/admin/AdminHome";
import Payment from "../pages/dashboard/user/payment/Payment";
 

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path: "/ourshop/:category",
          element: <OurShop></OurShop>
        },
       
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }


      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        
        {
          path :'cart',
          element:<Cart></Cart>,
        },
        {
          path :'payment',
          element:<Payment></Payment>,
        },
        {
          path :'adminHome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>,
        },
        {
          path :'allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>,
        },
        {
          path :'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>,
        },  {
          path :'manageItems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>,
        },


      ]

    }
  ]);
